# JavaScript + HTML + CSS Connection - Familiarization Tasks

## Overview
This project demonstrates three ways to connect JavaScript to a web page: inline, internal, and external.

## Files Included

### Task 1: Inline JavaScript
- **File:** `task1_inline.html`
- **Description:** JavaScript function called directly from HTML using `onclick` attribute
- **Key Learning:** Inline JavaScript (behavior mixed with HTML structure)

### Task 2: Internal JavaScript
- **File:** `task2_internal.html`
- **Description:** JavaScript code in `<script>` tags within the same HTML file
- **Key Learning:** Separation of behavior from HTML elements using addEventListener

### Task 3: External JavaScript
- **Files:** 
  - `task3_external.html` (HTML structure)
  - `script.js` (External JavaScript file)
- **Description:** JavaScript code in separate .js file
- **Key Learning:** Complete separation of structure (HTML) and behavior (JavaScript)

### Task 4: External JavaScript++ (Advanced)
- **Files:**
  - `task4_external_plus.html` (HTML structure)
  - `styles.css` (External CSS file)
  - `app.js` (Advanced JavaScript with multiple features)
- **Description:** Full separation with advanced features (click counter, toggle classes, dynamic content)
- **Key Learning:** Professional web development structure

### Task 4: Modified Version (With Experiments)
- **Files:**
  - `task4_modified.html` (HTML structure)
  - `styles_modified.css` (Modified CSS with experiments)
  - `app_modified.js` (Modified JavaScript with experiments)
- **Description:** Same as Task 4 but with custom experiments applied
- **Experiments Applied:**
  - A) Changed button color from green to purple
  - B) Custom dynamic messages that change with each click
  - C) Alert on first button click
  - D) Pulse animation on click count + background color change at 10 clicks

## How to Use

### For Each Task:

1. **Open the HTML file** in your web browser (Chrome, Firefox, Edge, etc.)
2. **Take a "Before Click" screenshot** showing:
   - Split screen with code editor on left
   - Browser window on right
   - Your name visible in the HTML

3. **Click the button** to trigger the JavaScript functionality

4. **Take an "After Click" screenshot** showing:
   - The same split screen view
   - The changed message/behavior

### Important Notes:

- **Remember to add your name** in the HTML files where it says `[Your Name Here]`
- Open browser console (F12) to see console.log messages
- For Task 3 and 4, make sure all files are in the same directory

## Key Differences

| Method | Structure | Best Practice |
|--------|-----------|---------------|
| **Inline** | JavaScript mixed with HTML | ❌ Not recommended for production |
| **Internal** | JavaScript in same file, but separated | ⚠️ OK for small projects |
| **External** | JavaScript in separate .js file | ✅ Best practice for real projects |

## Learning Objectives

✅ Understand three methods of connecting JavaScript to HTML  
✅ Learn the importance of separation of concerns  
✅ Practice using addEventListener vs onclick  
✅ Experience modern web development best practices  
✅ Experiment with modifying code behavior and styling  

## Experiments Summary (Task 4 Modified)

### Experiment A: Changed Button Color
- Modified `background-color` from `#4CAF50` (green) to `#9b59b6` (purple)
- Changed hover color to `#8e44ad` (darker purple)

### Experiment B: Custom Message Text
- Added array of 5 different celebratory messages
- Messages rotate based on click count
- Messages include emojis for visual appeal

### Experiment C: Alert Feature
- Alert appears on first button click
- Welcomes user to the interactive demo

### Experiment D: Custom Additions
1. **Pulse Animation:** Click count pulses/grows when updated
2. **Background Change:** Background gradient changes to green after 10 clicks
3. **Special Alert:** Congratulatory message at 10 clicks

## Tips for Screenshots

1. Use split-screen or take separate screenshots of code and browser
2. Ensure your name is visible in the HTML
3. Show clear before/after states
4. Include file names in screenshots if possible
5. Make sure text is readable

## Deliverables Checklist

- [ ] Task 1a: Before Click screenshot
- [ ] Task 1b: After Click screenshot
- [ ] Task 2a: Internal Before Click screenshot
- [ ] Task 2b: Internal After Click screenshot
- [ ] Task 3a: External Before Click screenshot
- [ ] Task 3b: External After Click screenshot
- [ ] Task 4a: External++ Before Click screenshot
- [ ] Task 4b: External++ After Click screenshot
- [ ] Your name added to all HTML files
- [ ] All experiments completed and documented

## Need Help?

- Check browser console (F12) for error messages
- Ensure all files are in the same directory
- Verify file names match exactly (case-sensitive)
- Test in different browsers if issues occur

---

**Created for:** LBYCPG3 Course  
**Topic:** JavaScript + HTML + CSS Connection Familiarization  
**Date:** 2025
