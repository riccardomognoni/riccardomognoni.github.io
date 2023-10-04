import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.SocketException;

public class App{
  public static void main(String[] args) throws IOException {
        
    Azienda azienda=new Azienda();
    azienda.caricaFile("dipendente.txt");
    azienda.vediStartUp();
    CUfficio uff2=new CUfficio("Logistica", 1, "A13", "Riccardo Rossi", 8);
    Dipendente d3=new Dipendente("Mario", "Bianchi", "Via Roma, Como", "12/01/2000", "12/08/2022", 40);
    azienda.aggiungiDipendente(uff2, d3);
    azienda.salvaSuFile("dipendente.txt");
    azienda.vediStartUp();
    
    }
}