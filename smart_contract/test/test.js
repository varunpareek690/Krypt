// Import the smart contract artifact
const TransactionsContract = artifacts.require("Transactions");

contract("TransactionsContract", (accounts) => {
  let transactionsContract;

  // Deploy the smart contract before each test
  beforeEach(async () => {
    transactionsContract = await TransactionsContract.new();
  });

  // Test case for the getAllTransactions function
  it("should return an array of transactions", async () => {
    const transactions = await transactionsContract.getAllTransactions();

    assert.isArray(transactions, "Transactions is not an array");
  });

  // Test case for the getTransactionCount function
  it("should return the total number of transactions", async () => {
    const transactionCount = await transactionsContract.getTransactionCount();

    assert.isNumber(transactionCount.toNumber(), "Transaction count is not a number");
  });

  // Test case for the addToBlockchain function
  it("should add a transaction to the blockchain", async () => {
    const addressTo = accounts[1]; // Example: Use the second account as the receiver
    const amount = web3.utils.toWei("1", "ether"); // Example: Send 1 ether
    const message = "Test message";
    const keyword = "Test keyword";

    const tx = await transactionsContract.addToBlockchain(addressTo, amount, message, keyword);
    assert.isObject(tx, "Transaction was not successful");
  });
});
