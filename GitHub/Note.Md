## Github

--> Website that allow developers to store and manage their code using git.
--> we use to upload folder in git hub which is generally known as repository.
--> changes made in github is called as commit.

## Git

--> Git is a version control system.
--> Version control System is a tool that helps to track changes in code.
--> It is popular , free & open source ,fast and scalable
--> Track the history , collaborate.

==> Configuring Git
--> git config --global user.name "My Name"
--> git config --global user.email "email@gmail.com"
--> git config --list

Ctrl + ` == Open terminal

# Clone && Status

--> Clone -- Cloning a repository on our local machine  
git clone <- some link ->

--> status - displays the state of thecode
git status

1. untracked
   new files that git doesnt yet tracked
2. modified
   changed
3. staged
   files is ready to be committed
4. unmodified
   unchanged

# Add && Commit

--> add - adds new or changed files in working directory to the git staging area
git add <- file name > --> for mac
git add . --> for windows

--> commit - it is the record of changes
git commit -m "Meaningful message to be given"

# Push command 
--> push - upload local repo content to remote repo 
git push origin main 

# init 
init - used to create a new git repo 

git init 
git remote add origin <-link ->
git remote -v   (to verify remote)
git branch (to check branch)
git branch -M main (to rename branch)
git push origin main 