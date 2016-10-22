import java.util.*;

public class MainMenu {
    public static void main(String[] args){
        System.out.println("***********************************************************");
        System.out.println("* Types of Conversions:                                   *");
        System.out.println("*                                                         *");
        System.out.println("* 1. Sales Tax Converter                                  *");
        System.out.println("* 2. Sales Tax Converter                                  *");
        System.out.println("* 3. Sales Tax Converter                                  *");
        System.out.println("* 4. Sales Tax Converter                                  *");
        System.out.println("* 5. Sales Tax Converter                                  *");
        System.out.println("* 6. Exit                                                 *");
        System.out.println("***********************************************************");

        System.out.println();

        Scanner sc = new Scanner(System.in);
        int selection;
        boolean done = false;

        while(done == false){
            try{
                System.out.print("Please enter your selection: ");

                selection = sc.nextInt();

                switch(selection){
                    case 1:
                        System.out.print("Enter the price of the item: ");
                        double priceOfItem = sc.nextDouble();
                        System.out.print("Enter current sales tax in %: ");
                        double salexTax = sc.nextDouble();
                        break;

                    case 6:
                        System.exit(0);

                    default: System.out.println("not a valid selection");
                }
            }
            catch(InputMismatchException exception){
                System.out.println("Please enter a valid selection!");
            }
        }

        System.exit(0);
    }
}
