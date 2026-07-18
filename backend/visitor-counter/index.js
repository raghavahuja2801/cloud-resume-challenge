const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, UpdateCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.TABLE_NAME;

exports.handler = async (event) => {
  try {
    const result = await docClient.send(
      new UpdateCommand({
        TableName: TABLE_NAME,
        Key: { id: "visitor-count" },
        UpdateExpression: "SET #c = if_not_exists(#c, :start) + :incr",
        ExpressionAttributeNames: { "#c": "count" },
        ExpressionAttributeValues: {
          ":incr": 1,
          ":start": 0,
        },
        ReturnValues: "UPDATED_NEW",
      })
    );

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // adjust/remove for prod
      },
      body: JSON.stringify({ count: result.Attributes.count }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to update visitor count" }),
    };
  }
};