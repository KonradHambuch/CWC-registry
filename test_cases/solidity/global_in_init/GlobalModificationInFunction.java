import org.hyperledger.fabric.shim.Chaincode;
import org.hyperledger.fabric.shim.ChaincodeStub;
import org.hyperledger.fabric.shim.Chaincode.Response.Status;
public class GlobalModificationInFunction implements Chaincode{
    public static String GlobalVariable;
    @Override
    public Response init(ChaincodeStub stub) {
        CodeSmell();
        return new Response(Status.SUCCESS, "Succes", null);
    }

    @Override
    public Response invoke(ChaincodeStub stub) {        
        return null;
    }
    public void CodeSmell(){
        GlobalVariable = "CodeSmell";
    }
}