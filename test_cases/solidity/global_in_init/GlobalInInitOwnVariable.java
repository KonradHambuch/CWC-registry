import org.hyperledger.fabric.shim.Chaincode;
import org.hyperledger.fabric.shim.ChaincodeStub;
import org.hyperledger.fabric.shim.Chaincode.Response.Status;
public class GlobalInInitOwnVariable implements Chaincode{
    public static String GlobalVariable;
    @Override
    public Response init(ChaincodeStub stub) {
        GlobalVariable = "CodeSmell";
        return new Response(Status.SUCCESS, "Succes", null);
    }

    @Override
    public Response invoke(ChaincodeStub stub) {        
        return null;
    }
}