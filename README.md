# San Diego Verbal Paired-Associates (SD-VPA) Task
<!-- Intro section -->
San Diego Verbal Paired-Associates (SD-VPA) Task ("this app") by Chris Schmickl, Atul Malhotra, Ina Djonlagic, Tyler Bath is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

This app represents a continued development from: Djonlagic IE, Guo M, Igue M, Kishore D, Stickgold R, Malhotra A. CPAP Restores Declarative Memory Deficit in Obstructive Sleep Apnea. AJRCCM 2021 May 1;203(9):1188-1190 https://doi.org/10.1164/rccm.202011-4253LE

In brief, this app is designed to test sleep-dependent memory via semantically associated word pairs. There are two modes, training and testing. In our use case, participants complete the training mode in the evening, and the testing mode in the morning after a nights sleep. 
### Training
In training mode each word pair is displayed for several seconds, before moving on to the next pair. After viewing all pairs, the participant is then presented with a repeatable training test. In this test the participant is provided with feedback on if their answer is correct. The participant is asked to repeat this training test until achieving at least 60 percent of correct word pairs. After each test a csv file with the percent correct word pairs (scoring ignores letter case and leading/trailing spaces), meta information, and participant answers is downloaded. 
### Testing
This mode tests the participant without revealing the correct answer after each entry. The test is not repeatable. At the end of the test a csv file with the percent correct word pairs (scoring ignores letter case and leading/trailing spaces), meta information, and participant answers is downloaded. 

The primary outcome is the difference between the percent of correct word pairs during the morning test vs the final evening test.

## How to

### Using the existing app
If you would like to use this app as is, you can simply use our existing deployment at: https://ucsdmalhotra.github.io/word-pairs-associate-2023-built/

### Creating your own changes
This app is built using Angular. 
Word pair lists are defined in src/app/word.service.ts

## Disclaimer

This app has been designed and tested for use with a Google Chrome browser on a laptop (not ipad). This site/app may be changed without notice. 

If you have any questions, find any bugs, want complementary REDCap forms to collect the results from the app, or want to receive updates about potential changes in the app, then please contact Chris Schmickl at cschmickl@health.ucsd.edu. If possible, please also let us know if you publish results based on this app in a peer-reviewed journal so we can post an updated list of references for future users.

This site/app are for general information purposes only. All information on this site/app are provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on this site/app. Under no circumstances shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of this site/app or reliance on any information provided on this site/app. Your use of this site/app and your reliance on any information on this site/app is solely at your own risk.
