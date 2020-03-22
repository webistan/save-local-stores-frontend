# Setup

```
# If you don't have homebrew installed:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# Make sure that brew is up-to-date:
brew update

# Check that everything is fine by running:
brew doctor

# Install node.js:
brew install node

# Check that you have npm properly installed (comes with node):
npm -v

# Install the Angular CLI globally:
npm install -g @angular/cli

# Navigate to Angular directory:
cd save-local-stores-frontend-code

# Run frontend locally (--open (or just -o) automatically opens browser to http://localhost:4200/):
ng serve --open

# Go to http://localhost:4200/

# Build for deployment (look in dist directory for build artifacts):
ng build
```
