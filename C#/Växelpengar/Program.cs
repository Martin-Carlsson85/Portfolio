using System;
using System.Globalization;

namespace Växelpengar
{
    class Program
    {
        static void Main(string[] args)
        {
            double totalSum;
            uint sum;
            uint sumAfterRound = 0;
            double earRounding;
            uint change;

            while (true)
            {
                try
                {
                    Console.WriteLine("Ange totalsumman för köpet!");

                    string input = (Console.ReadLine());
                    totalSum = double.Parse(input, new CultureInfo("en-US"));


                    if (totalSum > 0)
                    {
                        break;
                    }
                    else
                    {
                        Console.WriteLine("Ange ett större tal är 0");
                    }




                }
                catch (FormatException)
                {
                    Console.WriteLine("Felaktigt format");

                }


            }



            sumAfterRound = (uint)Math.Round(totalSum, 2);


            while (true)
            {
                try
                {
                    Console.WriteLine("Ange erhållet belopp från kund");
                    sum = uint.Parse(Console.ReadLine());

                    if (sum >= totalSum)
                    {
                        break;
                    }
                    else
                    {
                        Console.WriteLine("Du har betalat för lite");
                    }


                }
                catch (FormatException)
                {
                    Console.WriteLine("Felaktigt format");
                }
            }


            earRounding = totalSum - sumAfterRound;
            change = sum - (uint)totalSum;


            {

                Console.WriteLine("KVITTO");
                Console.WriteLine("------------------------------");
                Console.WriteLine("Totalt: {0}", totalSum);
                Console.WriteLine("Öresavrundning: {0}", earRounding);
                Console.WriteLine("Att betala: {0}", sumAfterRound);
                Console.WriteLine("Kontant: {0}", sum);
                Console.WriteLine("Tillbaka: {0}", change);
                Console.WriteLine("------------------------------");



                uint fivehundred = change / 500;
                uint cash = change % 500;

                uint hundred = cash / 100;
                cash = cash % 100;

                uint fifty = cash / 50;
                cash = cash % 50;

                uint twenty = cash / 20;
                cash = cash % 20;

                uint ten = cash / 10;
                cash = cash % 10;

                uint one = cash / 1;

                Console.WriteLine("500-lappar          : {0}", fivehundred);
                Console.WriteLine("100-lappar          : {0}", hundred);
                Console.WriteLine("50-lappar           : {0}", fifty);
                Console.WriteLine("20-lappar           : {0}", twenty);
                Console.WriteLine("10-krona            : {0}", ten);
                Console.WriteLine("1-krona             : {0}", one);



            }


        }
    }
}




