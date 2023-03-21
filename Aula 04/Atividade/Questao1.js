/* Desenvolva um programa que cadastre profissionais para uma equpe de TI. Cada profissional deverá ter um código identificador(id), nome, e-mail, salário. Este programa deve nos permitir aumentar o salário do funcionário a partir de um percentual passado pelo usuário. */

import java.util.ArrayList;
import java.util.Scanner;

public class EquipeTI {
    private ArrayList<Profissional> profissionais;
    
    public EquipeTI() {
        this.profissionais = new ArrayList<Profissional>();
    }
    
    public void cadastrarProfissional(Profissional p) {
        this.profissionais.add(p);
    }
    
    public void aumentarSalario(int id, double percentual) {
        for (Profissional p : this.profissionais) {
            if (p.getId() == id) {
                p.aumentarSalario(percentual);
                System.out.println("Salário de " + p.getNome() + " aumentado em " + percentual + "%");
                return;
            }
        }
        System.out.println("Não foi encontrado nenhum profissional com o id " + id);
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        EquipeTI equipe = new EquipeTI();
        
        while (true) {
            System.out.println("Selecione uma opção:");
            System.out.println("1 - Cadastrar profissional");
            System.out.println("2 - Aumentar salário");
            System.out.println("3 - Sair");
            
            int opcao = scanner.nextInt();
            
            if (opcao == 1) {
                System.out.println("Digite o id do profissional:");
                int id = scanner.nextInt();
                scanner.nextLine();
                
                System.out.println("Digite o nome do profissional:");
                String nome = scanner.nextLine();
                
                System.out.println("Digite o e-mail do profissional:");
                String email = scanner.nextLine();
                
                System.out.println("Digite o salário do profissional:");
                double salario = scanner.nextDouble();
                
                equipe.cadastrarProfissional(new Profissional(id, nome, email, salario));
                System.out.println("Profissional cadastrado com sucesso!");
            } else if (opcao == 2) {
                System.out.println("Digite o id do profissional:");
                int id = scanner.nextInt();
                
                System.out.println("Digite o percentual de aumento:");
                double percentual = scanner.nextDouble();
                
                equipe.aumentarSalario(id, percentual);
            } else if (opcao == 3) {
                break;
            } else {
                System.out.println("Opção inválida!");
            }
        }
        
        scanner.close();
    }
}

class Profissional {
    private int id;
    private String nome;
    private String email;
    private double salario;
    
    public Profissional(int id, String nome, String email, double salario) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.salario = salario;
    }
    
    public int getId() {
        return this.id;
    }
    
    public String getNome() {
        return this.nome;
    }
    
    public String getEmail() {
        return this.email;
    }
    
    public double getSalario() {
        return this.salario;
    }
    
    public void aumentarSalario(double percentual) {
        double aumento = this.salario * (percentual / 100);
        this.salario += aumento;
    }
}
