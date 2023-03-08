// Crie uma nova Classe chamado Conta Corrente: Crie os métodos de sacar e depositar valores; O método sacar precisará verificar o saldo;

public class ContaCorrente {
    private double saldo;
    private String titular;

    public ContaCorrente(String titular){
        this.titular = titular;
    }

    public void depositar(double valorDeposito){
        this.saldo += valorDeposito;
        System.out.println("Seu novo saldo é: R$" + this.saldo);
    }

    public void sacar(double valorSaque){
        if (valorSaque <= this.saldo){
            this.saldo -= valorSaque;
            System.out.println("Seu saldo após o saque é: R$" + this.saldo);
        } else {
            System.out.println("Você precisa de um empréstimo!");

        }
    }

    public double verificarSaldo(){
        return this.saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }
}
