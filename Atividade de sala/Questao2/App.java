public class App2 {

    public static void main(String[] args) {

        ContaCorrente cc1 = new ContaCorrente("Rayanna Mandú");

        cc1.depositar(1260);
        cc1.sacar(285);
        cc1.depositar(1650.48);

        System.out.println("Titular: " + cc1.getTitular());
        System.out.println("Saldo atual: R$" + cc1.verificarSaldo());

    }
}
