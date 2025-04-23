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

# Terms

Directory -- Folder
terminal or command line --> Interface for text commands
cli -- command line interface

# Clone && Status

==> Clone -- Cloning a repository on our local machine  
git clone <- some link ->

==> status - displays the state of thecode
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

# pull command 


# init

init - used to create a new git repo

git init # Initialize a new local Git repository
git remote add origin <link> # Add a remote repository named 'origin'
git remote -v # Verify the remote repository URLs
git branch # List all local branches
git branch -M main # Rename current branch to 'main'
git push origin main # Push 'main' branch to remote 'origin'
git push -u origin main # Push and set 'main' to track 'origin/main'

# Branch Commands

git branch - to check branch
git branch -M main to rename branch
git checkout <-branch name -> (to navigate)
git checkout -b <-new branch name ->create new branch
git branch -d <-branch name> to delete branch

# Merging Code

==> Way 1
git diff <-branch name> (to compare commits,branches,files and more)
git merge <-branch name> (to merge 2 branches)

==> Way 2
Create a PR(Pull Request)
PR -- It lets you tells others about changes you've pushed to a branch in a repository on Github

# Resolving Merge Conficts

--> An event that takes places when Git is unable to automatically resolve differences in code between two commits

# Undoing changes

--> case 1 :Staged changes
git reset <-file name >
git reset

--> case 2 : commited changes (for one commits)
git reset HEAD~1

--> case 3 : commited changes (for many commits)
git reset <- commit hash ->
git reset --hard <- commit hash ->

# Fork

--> A fork is a new repository that shares code and visibility setting with the original "upstream" repository
--> Fork is a rough copy
