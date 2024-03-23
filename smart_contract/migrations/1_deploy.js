var Transactions = artifacts.require("Transactions");

module.exports = function(deployer){
    deployer.deploy(Transactions).then(async (deployedContract) =>{
        console.log("Contract is deployed at",deployedContract.address);
    });
}