/**
 * Mini Project: Guess the Number
 * The computer picks a random number from 1 to 100.
 * The player keeps guessing until they get it right.
 */
import java.util.Scanner;

public class GuessTheNumber {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String playAgain;

        System.out.println("=====================================");
        System.out.println("     WELCOME TO GUESS THE NUMBER     ");
        System.out.println("=====================================");

        do {
            // random number from 1 to 100
            int mynum = (int) (Math.random() * 100) + 1;
            int attempts = 0;
            int userNumber;

            System.out.println("\nI have picked a number between 1 and 100.");

            while (true) {
                System.out.print("Guess my number: ");

                // check that the user typed a whole number
                if (!sc.hasNextInt()) {
                    System.out.println("WRONG INPUT!!! Please enter a number.");
                    sc.next(); // discard the bad input
                    continue;
                }

                userNumber = sc.nextInt();

                // check the range
                if (userNumber < 1 || userNumber > 100) {
                    System.out.println("WRONG INPUT!!! Enter a number between 1 and 100.");
                    continue;
                }

                attempts++;

                if (userNumber == mynum) {
                    System.out.println("YEHHH!!! CORRECT NUMBER!!!");
                    System.out.println("You guessed it in " + attempts + " attempts.");
                    break;
                } else if (userNumber > mynum) {
                    System.out.println("Your number is too large!");
                } else {
                    System.out.println("Your number is too small!");
                }
            }

            System.out.print("\nDo you want to play again? (yes/no): ");
            playAgain = sc.next();

        } while (playAgain.equalsIgnoreCase("yes") || playAgain.equalsIgnoreCase("y"));

        System.out.println("Thanks for playing. Goodbye!");
        sc.close();
    }
}