#include <iostream>

int main() {
    int fizz, buzz, min_val, max_val;
    std::cout << "Enter the Fizz value: ";
    std::cin >> fizz;
    std::cout << "Enter the Buzz value: ";
    std::cin >> buzz;
    std::cout << "Enter the minimum value: ";
    std::cin >> min_val;
    std::cout << "Enter the maximum value: ";
    std::cin >> max_val;
    
    for (int i = min_val; i <= max_val; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            std::cout << "FizzBuzz" << std::endl;
        } else if (i % fizz == 0) {
            std::cout << "Fizz" << std::endl;
        } else if (i % buzz == 0) {
            std::cout << "Buzz" << std::endl;
        } else {
            std::cout << i << std::endl;
        }
    }
    return 0;
}
