# ============================================================
#  deploy.ps1 — Push all changes + deploy to GitHub Pages
#  Run this in your terminal:
#    .\deploy.ps1
# ============================================================

$ErrorActionPreference = "Stop"
$ProjectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectDir

Write-Host ""
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  Portfolio Deploy Script" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# ── Step 1: Stage any remaining uncommitted changes (not .env) ──
Write-Host "[1/5] Staging changes..." -ForegroundColor Yellow
git add src/ public/ docs/ --ignore-errors 2>$null
git restore --staged .env 2>$null   # never commit .env

$staged = git diff --cached --name-only
if ($staged) {
    Write-Host "      Staged files:" -ForegroundColor Gray
    $staged | ForEach-Object { Write-Host "        + $_" -ForegroundColor Gray }

    # ── Step 2: Commit if there's anything new ──
    Write-Host ""
    Write-Host "[2/5] Committing..." -ForegroundColor Yellow
    git commit -m "chore: sync latest changes before deploy"
    Write-Host "      Commit done." -ForegroundColor Green
} else {
    Write-Host "      Nothing new to commit." -ForegroundColor Green
    Write-Host "[2/5] Skipping commit (already up to date)." -ForegroundColor Yellow
}

Write-Host ""

# ── Step 3: Build production bundle ──
Write-Host "[3/5] Building production bundle..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed. Fix errors above and re-run." -ForegroundColor Red
    exit 1
}
Write-Host "      Build succeeded." -ForegroundColor Green
Write-Host ""

# ── Step 4: Stage & commit updated docs/ build output ──
Write-Host "[4/5] Committing build output..." -ForegroundColor Yellow
git add docs/
$builtStaged = git diff --cached --name-only
if ($builtStaged) {
    git commit -m "build: update production bundle for GitHub Pages"
    Write-Host "      Build output committed." -ForegroundColor Green
} else {
    Write-Host "      Build output unchanged, skipping." -ForegroundColor Green
}
Write-Host ""

# ── Step 5: Push to GitHub (triggers Pages redeploy) ──
Write-Host "[5/5] Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "      (A login window may appear — sign in to GitHub)" -ForegroundColor Gray
git push origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Push failed. Check your GitHub credentials." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "==================================================" -ForegroundColor Green
Write-Host "  SUCCESS! All changes pushed to GitHub." -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green
Write-Host ""
Write-Host "  GitHub Pages will redeploy in ~1-2 minutes." -ForegroundColor White
Write-Host "  Live site: https://shanmukha919.github.io/Potturi_919_Portfolio/" -ForegroundColor Cyan
Write-Host ""
