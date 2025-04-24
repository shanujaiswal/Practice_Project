## Github

--> Website that allow developers to store and manage their code using git.
--> we use to upload folder in git hub which is generally known as repository.
--> changes made in github is called as commit.
--> GitHub is the largest host of source code in the world, and has been owned by Microsoft since 2018.

## Git

--> Git is a version control system.
--> Version control System is a tool that helps to track changes in code.
--> It is popular , free & open source ,fast and scalable
--> Track the history , collaborate.
--> created by Linus Torvalds in 2005 and maintained by Junio Hamano

==> What does Git do?
--> Manage projects with Repositories
--> Clone a project to work on a local copy
--> Control and track changes with Staging and Committing
--> Branch and Merge to allow for work on different parts and versions of a project
--> Pull the latest version of the project to a local copy
--> Push local updates to the main project

-->git --version --> Tells the version
==> Configuring Git
--> git config --global user.name "My Name"
--> git config --global user.email "email@gmail.com"
--> git config --list

Ctrl + ` == Open terminal

# Creating Git Folder

mkdir myproject --> mkdir makes a new directory.
cd myproject --> cd changes the current working directory.

# Add && Commit

--> add - adds new or changed files in working directory to the git staging area
git add <- file name > --> for mac
git add . --> for windows
--> The shorthand command for git add --all is git add -A

--> commit - it is the record of changes
git commit -m "Meaningful message to be given"
--> The commit command performs a commit, and the -m "message" adds a message.
--> git log --history of commits for the repository

# Git Help

--> git command -help - See all the available options for the specific command
--> git help --all - See all possible commands --> This will display a very long list of commands
--> If you find yourself stuck in the list view, SHIFT + G to jump the end of the list, then q to exit the view

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

Short status flags are:
?? - Untracked files
A - Files added to stage
M - Modified files
D - Deleted files

# Push command

--> push - upload local repo content to remote repo
git push origin main

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

---

###### Notes From Claude

# Comprehensive Git and GitHub Guide

## Table of Contents

- [Git Basics](#git-basics)
- [GitHub Overview](#github-overview)
- [Getting Started with Git](#getting-started-with-git)
- [Git Workflow Fundamentals](#git-workflow-fundamentals)
- [Git Branches](#git-branches)
- [Remote Repository Operations](#remote-repository-operations)
- [Collaboration and Code Review](#collaboration-and-code-review)
- [Advanced Git Techniques](#advanced-git-techniques)
- [Git Best Practices](#git-best-practices)
- [Troubleshooting](#troubleshooting)

## Git Basics

**What is Git?**

- Git is a distributed version control system (DVCS)
- Created by Linus Torvalds in 2005 (the creator of Linux) and maintained by Junio Hamano
- Free and open-source
- Fast, efficient, and scalable
- Works well for both small and large projects

**What does Git do?**

- Tracks changes to files over time (version history)
- Enables collaboration among multiple developers
- Manages projects with repositories
- Allows working on different features simultaneously via branches
- Enables reverting to previous versions when needed
- Facilitates code review and quality control

**Key Benefits:**

- Full history of changes
- Offline work capability
- Branching and merging
- Data integrity (SHA-1 hash)
- Speed and performance
- Supports non-linear development

## GitHub Overview

**What is GitHub?**

- Web-based hosting service for Git repositories
- Largest host of source code in the world
- Acquired by Microsoft in 2018
- Provides additional collaboration features beyond Git

**Key GitHub Features:**

- Repository hosting
- Pull Requests for code review
- Issues for tracking bugs and tasks
- Projects for project management
- Actions for CI/CD (Continuous Integration/Continuous Deployment)
- Pages for website hosting
- Discussions for community conversations
- Security tools (Dependabot, CodeQL, etc.)
- Extensive API for integrations

**GitHub Terminology:**

- Repository: A project containing your files and revision history
- Fork: A personal copy of another user's repository
- Pull Request: Proposed changes to a repository
- Issue: Suggestions, tasks, or bug reports for a project
- README: Documentation file that appears on the main page of a repository
- GitHub Pages: Website hosting directly from a repository

## Getting Started with Git

**Installing Git:**

# For Ubuntu/Debian

sudo apt-get install git

# For macOS (using Homebrew)

brew install git

# For Windows

# Download from https://git-scm.com/download/win

**Checking Git Version:**

git --version

**Configuring Git:**

# Set username globally

git config --global user.name "Your Name"

# Set email globally

git config --global user.email "your.email@example.com"

# Set default editor

git config --global core.editor "code --wait" # For VS Code

# View all configurations

git config --list

**Creating a Repository:**

# Initialize a new repository

mkdir my-project
cd my-project
git init

# Check the status

git status

## Git Workflow Fundamentals

**The Three States in Git:**

1. **Working Directory**: Your local files where you make changes
2. **Staging Area (Index)**: Intermediate area for changes ready to be committed
3. **Repository (.git directory)**: Where Git stores the metadata and object database

**Basic Git Workflow:**

1. Modify files in the working directory
2. Stage changes using `git add`
3. Commit changes using `git commit`
4. Push changes to remote repository using `git push`

**Tracking Files:**

# Add a specific file to staging

git add filename.txt

# Add multiple files

git add file1.txt file2.txt

# Add all files in current directory

git add .

# Add all files in the project

git add -A

# Add all modified and deleted files (not new ones)

git add -u

**Committing Changes:**

# Commit with a message

git commit -m "Add new feature X"

# Commit all modified tracked files directly (skips staging)

git commit -a -m "Fix bug in feature Y"

**Checking Status and History:**

# View current status

git status

# View short status

git status -s

# View commit history

git log

# View compact history

git log --oneline

# View history with graph visualization

git log --graph --oneline --all

## Git Branches

**Branch Management:**

# List all branches

git branch

# List all branches including remote

git branch -a

# Create a new branch

git branch feature-name

# Create and switch to a new branch

git checkout -b feature-name

# Modern way to create and switch to a new branch (Git 2.23+)

git switch -c feature-name

# Switch to existing branch

git checkout branch-name

# or

git switch branch-name

# Rename current branch

git branch -M new-name

# Delete a branch (after merging)

git branch -d branch-name

# Force delete a branch (even if not merged)

git branch -D branch-name

**Merging:**

# First switch to the target branch (usually main/master)

git checkout main

# Merge a branch into the current branch

git merge feature-branch

# Merge with no fast-forward (creates a merge commit)

git merge --no-ff feature-branch

**Handling Merge Conflicts:**

1. Git will mark files with conflicts
2. Open the files and look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Edit files to resolve conflicts
4. Add resolved files with `git add`
5. Complete the merge with `git commit`

**Rebasing:**

# Rebase current branch onto another branch

git rebase main

# Interactive rebase for editing commits

git rebase -i HEAD~3 # Rebase last 3 commits

## Remote Repository Operations

**Working with Remotes:**

# List remote repositories

git remote -v

# Add a remote repository

git remote add origin https://github.com/username/repo.git

# Change remote URL

git remote set-url origin https://github.com/username/new-repo.git

# Remove a remote

git remote remove origin

**Cloning a Repository:**

# Clone a repository

git clone https://github.com/username/repo.git

# Clone a specific branch

git clone -b branch-name https://github.com/username/repo.git

# Clone to a specific directory

git clone https://github.com/username/repo.git my-directory

**Fetching and Pulling:**

# Fetch updates from remote without merging

git fetch origin

# Fetch updates from all remotes

git fetch --all

# Pull updates from remote (fetch + merge)

git pull origin main

# Pull with rebase instead of merge

git pull --rebase origin main

**Pushing Changes:**

# Push changes to remote

git push origin main

# Push and set upstream (first push)

git push -u origin main

# Force push (use with caution)

git push --force origin main

# Push all branches

git push --all origin

# Push tags

git push --tags origin

## Collaboration and Code Review

**Forking Workflow:**

1. Fork a repository on GitHub
2. Clone your fork to local machine
3. Add original repository as "upstream" remote
4. Create a feature branch
5. Make changes and push to your fork
6. Create a Pull Request to the original repository

**Setting Up Upstream:**

# Add the original repository as "upstream"

git remote add upstream https://github.com/original-owner/repo.git

# Fetch from upstream

git fetch upstream

# Sync your main branch with upstream

git checkout main
git merge upstream/main

**Pull Requests:**

- Created via GitHub interface or GitHub CLI
- Allow code review before merging
- Can be linked to issues
- Support comments, code suggestions, and approvals
- Can have required status checks (CI/CD, code review)

**Code Review Best Practices:**

- Keep changes small and focused
- Write clear PR descriptions
- Respond to review feedback
- Request reviews from relevant team members
- Use GitHub's code suggestion feature

## Advanced Git Techniques

**Stashing Changes:**

# Stash current changes

git stash

# Stash with a message

git stash save "Work in progress on feature X"

# List all stashes

git stash list

# Apply most recent stash without removing it

git stash apply

# Apply specific stash

git stash apply stash@{2}

# Apply and remove most recent stash

git stash pop

# Remove specific stash

git stash drop stash@{1}

# Clear all stashes

git stash clear

**Tagging:**

# List all tags

git tag

# Create a lightweight tag

git tag v1.0.0

# Create an annotated tag

git tag -a v1.0.0 -m "Release version 1.0.0"

# Tag a specific commit

git tag -a v1.0.0 -m "Release version 1.0.0" 9fceb02

# Push tags to remote

git push origin --tags

# Delete a tag

git tag -d v1.0.0
git push origin --delete v1.0.0 # Delete from remote

**Cherry-Picking:**

# Apply a specific commit from another branch

git cherry-pick commit-hash

# Cherry-pick multiple commits

git cherry-pick commit1 commit2 commit3

# Cherry-pick without committing

git cherry-pick -n commit-hash

**Undoing Changes:**

# Unstage a file

git restore --staged filename.txt

# or (older syntax)

git reset HEAD filename.txt

# Discard changes in working directory

git restore filename.txt

# or (older syntax)

git checkout -- filename.txt

# Undo last commit (keeping changes staged)

git reset --soft HEAD~1

# Undo last commit (unstaged changes)

git reset HEAD~1

# Undo last commit (discard changes)

git reset --hard HEAD~1

# Undo to a specific commit

git reset --hard commit-hash

# Create a new commit that undoes previous commit

git revert HEAD
git revert commit-hash

**Interactive Rebase (History Editing):**

# Rebase with interactive mode

git rebase -i HEAD~5 # Edit last 5 commits

# Available operations in interactive rebase:

# p, pick = use commit

# r, reword = use commit, but edit the commit message

# e, edit = use commit, but stop for amending

# s, squash = use commit, but meld into previous commit

# f, fixup = like "squash", but discard this commit's log message

# d, drop = remove commit

## Git Best Practices

**Commit Practices:**

- Write clear, concise commit messages
- Use present tense in commit messages ("Add feature" not "Added feature")
- Keep commits focused on a single logical change
- Commit often, perfect later, publish once

**Branching Strategy:**

- Use meaningful branch names (e.g., `feature/user-authentication`, `fix/login-bug`)
- Follow a branching model like GitFlow or GitHub Flow
- Keep branches short-lived
- Regularly sync with the main branch

**Workflow Tips:**

- Pull before pushing to avoid conflicts
- Use `.gitignore` to exclude unnecessary files
- Review changes before committing with `git diff`
- Use descriptive commit messages
- Set up SSH keys for secure authentication

**Git Hooks:**

- Pre-commit hooks for linting and testing
- Post-receive hooks for deployment
- Commit-msg hooks for enforcing commit message format

## Troubleshooting

**Common Issues and Solutions:**

1. **Merge Conflicts:**

   # Abort a merge with conflicts

   git merge --abort

   # Use merge tool to resolve conflicts

   git mergetool

2. **Detached HEAD State:**

   # Create a branch from detached HEAD

   git checkout -b new-branch-name

   # Return to main branch

   git checkout main

3. **Accidentally Committed to Wrong Branch:**

   # Create a new branch with current changes

   git branch new-branch

   # Reset current branch to before your changes

   git reset --hard origin/main

   # Switch to the new branch

   git checkout new-branch

4. **Fix Last Commit Message:**

   git commit --amend -m "New commit message"

5. **Recover Deleted Branch:**

   # Find the SHA of the deleted branch's tip

   git reflog

   # Create a new branch at that commit

   git checkout -b recovered-branch commit-hash

6. **Clean Working Directory:**

   # Remove untracked files

   git clean -f

   # Remove untracked files and directories

   git clean -fd

   # Preview what will be removed

   git clean -n
