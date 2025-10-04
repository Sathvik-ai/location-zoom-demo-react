# GitHub Setup Guide

## Step 1: Initialize Git Repository

```bash
cd "f:\2022BCD0028\project\New folder\location-zoom-demo-react"
git init
```

## Step 2: Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Add All Files

```bash
git add .
```

## Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Location Zoom Demo with GPS and 9 planets"
```

## Step 5: Create GitHub Repository

1. Go to https://github.com
2. Click "New Repository" (+ icon in top right)
3. Name it: `location-zoom-demo-react`
4. Description: "Interactive journey from solar system to GPS location"
5. Choose: **Public** or **Private**
6. **DO NOT** initialize with README (we already have one)
7. Click "Create Repository"

## Step 6: Connect to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR-USERNAME/location-zoom-demo-react.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 7: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files uploaded

---

## Future Workflow (After Tourism Features)

### When Making Changes:

```bash
# 1. Check status
git status

# 2. Add changed files
git add .

# 3. Commit with message
git commit -m "Add tourism data and route planning features"

# 4. Push to GitHub
git push origin main
```

### When Pulling Updates:

```bash
# Pull latest changes from GitHub
git pull origin main
```

---

## Common Git Commands

```bash
# Check current status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature/tourism-layer

# Switch branches
git checkout main

# Merge branch
git merge feature/tourism-layer

# Discard local changes
git checkout -- .

# View remote URL
git remote -v
```

---

## Recommended Commit Messages

- `Initial commit: Location Zoom Demo with GPS and 9 planets`
- `Add tourism dataset integration`
- `Implement real-time traffic layer`
- `Add route planning functionality`
- `Fix: Resolve infinite loop in MapView`
- `Update: Improve solar system animation`
- `Docs: Update README with new features`

---

## Branch Strategy (Optional)

```bash
# Main branch - stable code
main

# Development branch
git checkout -b development

# Feature branches
git checkout -b feature/tourism-data
git checkout -b feature/traffic-layer
git checkout -b feature/route-planning
```

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `git init` | Initialize repository |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit changes |
| `git push` | Push to GitHub |
| `git pull` | Pull from GitHub |
| `git status` | Check status |
| `git log` | View history |

---

## Next Steps

1. ✅ Initialize Git
2. ✅ Create initial commit
3. ✅ Create GitHub repository
4. ✅ Push to GitHub
5. ⏳ Add tourism features locally
6. ⏳ Test thoroughly
7. ⏳ Commit and push updates

**Ready to push to GitHub!** 🚀
