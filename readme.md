# Chris's 1stdibs Test  

This is an overview of my solution to the Test Automation Engineer Quiz for 1stdibs.
  
### My Approach  
  
During setup, I followed the [WebdriverIO Developer Guide](http://webdriver.io/guide.html). Although I typically use Chrome for personal browsing, I utilized Firefox for this test as it was the default browser in the documentation examples. However, I will likely use Chrome for future tests as Firefox could load pages slowly on occasion, leading to element visibility issues. I addressed these by liberally adding pauses and page reloads as redundancies to increase test robustness.  
  
In some tests, popup modals were a problem. I solved this by adding a login and logout procedure to each test (the modals did not appear when logged in). This considerably lengthens the time for each test, but logging and logging out each times modularizes each test in case it needs to be run separate from the others. The login credentials are associated with a dummy Gmail account I created and are accessed in a *.env* file with the *dotenv* Node package. This fulfills the project requirement to store such variables elsewhere.  
  
I wrote the tests straightforwardly at first and later converted them to the page object pattern. The test is written in Mocha using a BDD pattern in Chai.  
  
If you have any questions, or if I have somehow misunderstood a requirement, please let me know and I will address the matter immediately. Thank you for this opportunity!
