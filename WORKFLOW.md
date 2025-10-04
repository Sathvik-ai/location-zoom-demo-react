# Development Workflow

## 🚀 Initial Setup (Do Once)

### 1. Initialize Git and Push to GitHub

```bash
# Run the setup script
git-setup.bat

# OR manually:
git init
git add .
git commit -m "Initial commit: Location Zoom Demo with GPS and 9 planets"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `location-zoom-demo-react`
3. Description: `Interactive journey from solar system to GPS location with React + Node.js`
4. Choose Public or Private
5. **DO NOT** check "Initialize with README"
6. Click "Create Repository"

### 3. Connect to GitHub

```bash
# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/location-zoom-demo-react.git
git branch -M main
git push -u origin main
```

---

## 🔄 Regular Development Workflow

### Workflow for Adding Tourism Features:

```
1. Pull latest from GitHub
   ↓
2. Make changes locally (add tourism features)
   ↓
3. Test thoroughly
   ↓
4. Commit changes
   ↓
5. Push to GitHub
```

### Step-by-Step Commands:

#### **Step 1: Pull Latest Changes**
```bash
# Run pull script
git-pull.bat

# OR manually:
git pull origin main
```

#### **Step 2: Make Your Changes**
- Add tourism dataset
- Implement traffic layer
- Add route planning
- Test everything works

#### **Step 3: Check What Changed**
```bash
git status
```

#### **Step 4: Add and Commit**
```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Add tourism data visualization and route planning"
```

#### **Step 5: Push to GitHub**
```bash
# Run push script
git-push.bat

# OR manually:
git push origin main
```

---

## 📋 Recommended Workflow for Tourism Features

### Phase 1: Setup (Already Done ✅)
- [x] Initialize Git
- [x] Create .gitignore
- [x] Push initial code to GitHub

### Phase 2: Tourism Data (Next)
1. Pull latest from GitHub
2. Create tourism dataset structure
3. Add sample tourism data
4. Test locally
5. Commit: `"Add tourism dataset structure"`
6. Push to GitHub

### Phase 3: Tourism Visualization
1. Pull latest
2. Create TourismLayer component
3. Add markers on map
4. Add popup information
5. Test locally
6. Commit: `"Implement tourism markers and popups"`
7. Push to GitHub

### Phase 4: Traffic Layer
1. Pull latest
2. Integrate traffic API
3. Add traffic overlay
4. Test locally
5. Commit: `"Add real-time traffic visualization"`
6. Push to GitHub

### Phase 5: Route Planning
1. Pull latest
2. Implement route calculation
3. Add route display
4. Test locally
5. Commit: `"Implement route planning feature"`
6. Push to GitHub

---

## 🛠️ Useful Git Commands

### Check Status
```bash
git status
```

### View Changes
```bash
git diff
```

### View Commit History
```bash
git log --oneline
git log --graph --oneline --all
```

### Undo Changes (Before Commit)
```bash
# Discard changes in specific file
git checkout -- filename

# Discard all changes
git checkout -- .
```

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### Create Branch for Feature
```bash
# Create and switch to new branch
git checkout -b feature/tourism-layer

# Work on feature...

# Switch back to main
git checkout main

# Merge feature
git merge feature/tourism-layer
```

---

## 📝 Commit Message Guidelines

### Format:
```
<type>: <short description>

<optional detailed description>
```

### Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Examples:
```bash
git commit -m "feat: Add tourism dataset integration"
git commit -m "feat: Implement real-time traffic layer"
git commit -m "feat: Add route planning between tourism spots"
git commit -m "fix: Resolve map rendering issue"
git commit -m "docs: Update README with tourism features"
git commit -m "refactor: Optimize MapView component"
```

---

## 🔒 Before Pushing Checklist

- [ ] Code runs without errors
- [ ] All features tested
- [ ] No console errors
- [ ] README updated (if needed)
- [ ] Sensitive data removed (.env files)
- [ ] node_modules not included (check .gitignore)

---

## 🚨 Troubleshooting

### Problem: "fatal: not a git repository"
**Solution:** Run `git init` first

### Problem: "failed to push"
**Solution:** Pull first with `git pull origin main`

### Problem: "merge conflict"
**Solution:** 
1. Open conflicted files
2. Resolve conflicts manually
3. `git add .`
4. `git commit -m "Resolve merge conflicts"`
5. `git push origin main`

### Problem: "remote origin already exists"
**Solution:** 
```bash
git remote remove origin
git remote add origin YOUR-NEW-URL
```

---

## 📊 Current Project Status

### ✅ Completed:
- Solar system with 9 planets
- Top-to-side camera rotation
- Earth globe transition
- 8-level GPS zoom
- Coordinate display
- Clean codebase

### ⏳ Next (Tourism Features):
- Tourism dataset integration
- Tourism markers on map
- Real-time traffic layer
- Route planning
- Route visualization

---

## 🎯 Quick Commands

| Action | Command |
|--------|---------|
| Initialize | `git-setup.bat` |
| Pull | `git-pull.bat` |
| Push | `git-push.bat` |
| Status | `git status` |
| History | `git log --oneline` |

---

**Follow this workflow for smooth development!** 🚀
