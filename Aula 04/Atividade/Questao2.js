/* Desenvolva um programa adicional ao pedido na questão anterior, com métodos estáticos. Este programa deverá ser capaz de calcular o valor do imposto que será pago pelo usuário a partir de seu salário. */

import java.util.Scanner;

public class Imposto {
    public static double calcularImposto(double salario) {
        if (salario <= 1903.98) {
            return 0;
        } else if (salario <= 2826.65) {
            return salario * 0.075 - 142.80;
        } else if (salario <= 3751.05) {
            return salario * 0.15 - 354.80;
        } else if (salario <= 4664.68) {
            return salario * 0.225 - 636.13;
        } else {
            return salario * 0.275 - 869.36;
        }
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite o salário:");
        double salario = scanner.nextDouble();
        
        double imposto = Imposto.calcularImposto(salario);
        System.out.println("Imposto a ser pago: R$" + imposto);
        
       
