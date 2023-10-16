// Basic Git and Github
// Learning Github Colaborator

//--------------------------------------------------------------------------------------------------------------------------------
// BEFORE YOU START LEARNING
// always check your current remote origin in the git bash
// git remote -v
// this will show you the repository you are currently working on
// make sure that you are in the correct repository

// example :
// if i'm working on this repository https://github.com/haniladjamba/latihan-git1
// that means
// git remote -v
// will show :
//  origin  https://github.com/haniladjamba/latihan-git1 (fetch)
//  origin  https://github.com/haniladjamba/latihan-git1 (push)

// if it's not the same URL, then change it
// to change the remote origin, this is what you will write in git bash
// git remote remove origin
// git remote add origin YOUR_NEW_URL
//--------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------
// PULL and PUSH

// step 0 (clone the reporsitory if you dont have it on your local computer)
// git clone https://github.com/haniladjamba/latihan-git1
// then open the file on your text editor

// step 1 (pull the repository first)
// git pull
// this should pull all the newest change that been added to the file online

// step 2 (edit the file)
// Try console.log() your name here
console.log("Perubahan di hari senin");
console.log("Poetri cantik hehe");
console.log("Juan Keren");
console.log("Hello world");
console.log("front end menyenangkan");
console.log("putri kedua");
console.log("Hani Jastin Giovanni Ladjamba");
console.log("Hani Jastin Giovanni Ladjamba 2");
console.log("halohai, i'm natalia");
console.log("ini kedua");
console.log("jadi gini...")
console.log("Fronted class")
console.log("Emang boleh???")
// step 3 (open git bash)

// step 4 (add the changes that you make in the git bash)
// git add .
// this will add all the change you make in all of the files in the current folder

// step 5 (commit your changes)
// git commit -m "Adding my name"
// always remember to commit before you push the current changes

// step 6 (push the current changes to the online repository)
// git push

// Done
//--------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------
// BEST PRACTICE
// the best practice when working on collaboration is to always remember to PULL first then PUSH
//--------------------------------------------------------------------------------------------------------------------------------