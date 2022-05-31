using System;

namespace Rita_med_asterisker
{
    class Program
    {
        static void Main(string[] args)
        {
            //for-loop som räknar till 26 rader.
            for (int row = 0; row < 26; row++)
            {

                //switch-sats som gör så att det blir olika färger på raderna.
                switch (row % 3)
                {
                    case 0:
                        Console.ForegroundColor = ConsoleColor.Yellow;
                        break;

                    case 1:
                        Console.ForegroundColor = ConsoleColor.Magenta;
                        break;

                    case 2:
                        Console.ForegroundColor = ConsoleColor.Green;
                        break;
                }


                if (row % 2 > 0)
                {
                    Console.Write(" ");
                }

                //for-loop som räknar till 39 stjärnor 
                for (int col = 0; col < 39; col++)
                {

                    Console.Write("* ");
                }
                Console.WriteLine();
            }

            Console.ResetColor();
        }
    }
}


