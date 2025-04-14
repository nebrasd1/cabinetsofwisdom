#!/bin/bash

echo "🔄 Starting Quartz fork update..."

# Set your main working branch here (change if needed)
BRANCH="v4"

# Move to script directory (assumes you're in the Quartz project root)
cd "$(dirname "$0")"

# Check if inside a Git repo
if [ ! -d .git ]; then
  echo "❌ Not a Git repository. Make sure you're running this inside your Quartz fork."
  exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo "⚠️ You have uncommitted changes!"
  echo "Do you want to stash them before updating? (y/n)"
  read -r response

  if [[ "$response" =~ ^[Yy]$ ]]; then
    git stash push -m "Pre-update stash on $(date)"
    STASHED=true
    echo "🧳 Changes stashed temporarily."
  else
    echo "❌ Aborting update to avoid overwriting your work."
    exit 1
  fi
fi

# Add upstream if not already added
if ! git remote get-url upstream &> /dev/null; then
  echo "🔗 Adding upstream remote..."
  git remote add upstream https://github.com/jackyzha0/quartz.git
fi

# Switch to main working branch
echo "📦 Switching to '$BRANCH' branch..."
git checkout "$BRANCH"

# Fetch and merge updates
echo "⬇️ Fetching upstream..."
git fetch upstream

echo "🧬 Merging upstream/$BRANCH into your local $BRANCH..."
if git merge "upstream/$BRANCH"; then
  echo "✅ Merge completed without conflicts!"
else
  echo "⚠️ Merge had conflicts. Please resolve them manually, then run:"
  echo "   git add <conflicted-files>"
  echo "   git commit"
  if [ "$STASHED" = true ]; then
    echo "💡 After resolving, you can re-apply your stashed changes with:"
    echo "   git stash pop"
  fi
  exit 1
fi

# Push to your GitHub fork
echo "☁️ Pushing merged updates to your GitHub fork..."
git push origin "$BRANCH"

# Restore stashed changes (if any)
if [ "$STASHED" = true ]; then
  echo "📦 Re-applying stashed changes..."
  git stash pop
fi

echo "🎉 Quartz fork ($BRANCH) updated successfully!"
