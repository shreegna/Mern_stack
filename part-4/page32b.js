

import {checkBalance,withdraw,deposit,showTransactions} from "./bank.js"
deposit(1, 5000);
checkBalance(1)
withdraw(2,3000);
checkBalance(2)
showTransactions(2)