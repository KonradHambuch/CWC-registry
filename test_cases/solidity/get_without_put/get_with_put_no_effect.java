public Response init(ChaincodeStub stub) {
    String notEffectedVariable = "";
    String varialbe = stub.getState('key');
    stub.putState('key2', notEffectedVariable);
}
