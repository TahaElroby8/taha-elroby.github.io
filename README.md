# Taha Atta Elroby - Portfolio Website

A professional portfolio website showcasing my experience as a Financial Data Analyst with expertise in Excel, Power BI, SQL, Python, and Machine Learning.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Draggable profile image
  - Animated skill bars
  - Smooth scrolling navigation
  - Hover effects on cards and buttons
- **Professional Sections**:
  - Hero section with social links
  - About me with statistics
  - Services offered
  - Technical skills with proficiency levels
  - Professional experience timeline
  - Education & certifications
  - Featured projects
  - Contact form with multiple communication methods

## Color Scheme

| Usage | Color | HEX | Meaning |
|-------|-------|-----|---------|
| Main Background | Creamy white | #F5F5F5 | Calm, clean, peaceful |
| Primary Text | Very dark gray/navy | #1E1E2F | Clarity, strength, professionalism |
| Secondary Text | Medium gray | #7D7D7D | Balance, readability |
| Action/Links | Dark blue | #1A3D7C | Trust, strength, stability |
| Highlight | Soft green | #3A9D63 | Growth, success, financial security |
| Accent | Dark brown/burgundy | #8B3D3D | Elegance, luxury, reassurance |

## Technologies Used

- HTML5
- CSS3 (with custom properties and animations)
- JavaScript (Vanilla)
- Font Awesome icons

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── profile.jpg         # Profile photo
├── egypco_logo.webp    # Company logo
├── depi_logo.jpg       # DEPI certification logo
├── nti_logo.webp       # NTI certification logo
├── eyouth_logo.jpg     # EYouth certification logo
├── project_placeholder.jpg  # Project images
└── README.md           # This file
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `username.github.io`)
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Files

**Option A: Using Git (Recommended)**

```bash
# Navigate to your portfolio folder
cd portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. Click "uploading an existing file"
2. Drag and drop all your portfolio files
3. Scroll down and click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for deployment

Your website will be available at:
- `https://YOUR_USERNAME.github.io/REPO_NAME/` (if repo name is not username.github.io)
- `https://YOUR_USERNAME.github.io/` (if repo name is username.github.io)

## Customization

### Adding Projects

To add your own projects, edit the `index.html` file and replace the placeholder project cards:

```html
<div class="project-card">
    <div class="project-image">
        <img src="your_project_image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="your_github_link" target="_blank" class="project-link">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p class="project-description">Your project description...</p>
        <!-- Add more details as needed -->
    </div>
</div>
```

### Updating Contact Information

All contact information is in the HTML. Update the following:
- Email: `taha.elroby8@gmail.com`
- Phone: `+20 1010711512`
- LinkedIn: Update the profile URL
- WhatsApp: Update the number in `wa.me/` links

### Changing Colors

Edit the CSS variables in `style.css`:

```css
:root {
    --bg-main: #F5F5F5;
    --text-primary: #1E1E2F;
    --text-secondary: #7D7D7D;
    --color-action: #1A3D7C;
    --color-highlight: #3A9D63;
    --color-accent: #8B3D3D;
}
```

## Contact Methods

The website includes multiple ways for visitors to contact you:
- **Email**: Click-to-email functionality
- **WhatsApp**: Direct WhatsApp messaging
- **LinkedIn**: Professional networking
- **Phone**: Direct calling option
- **Contact Form**: Opens default email client with pre-filled information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This portfolio website is free to use and modify for personal purposes.

## Author

**Taha Atta Elroby**
- Email: taha.elroby8@gmail.com
- LinkedIn: [linkedin.com/in/taha-elroby-4b7640244](https://www.linkedin.com/in/taha-elroby-4b7640244)
- Location: Cairo, Egypt

---

**Note**: Remember to replace placeholder images with your actual project screenshots and update the content as needed!
