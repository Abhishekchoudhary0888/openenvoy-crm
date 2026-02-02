# Documentation Guide

Quick reference to all project documentation.

## 📚 Documentation Files

### 🏠 [README.md](./README.md)
**Main project documentation** - Start here!
- Features overview
- Tech stack
- Getting started guide
- Project structure
- Component overview
- Development guide

### 🏗 [architecture.md](./architecture.md)
**Technical architecture and implementation details**
- Goals and non-goals
- Tech stack rationale
- Project structure with dependency rules
- Design system approach
- Data layer implementation
- Mock data strategy
- Filtering, sorting, and pagination logic
- Error handling patterns
- Component highlights
- Future enhancements

### 📖 [STORYBOOK.md](./STORYBOOK.md)
**Storybook component documentation**
- Complete story inventory (23 stories)
- Organization structure
- New stories added
- Updated stories
- Deleted stories
- Story naming conventions
- Running Storybook
- Testing strategy

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run Storybook
npm run storybook

# Build for production
npm run build
```

## 📁 File Structure

```
/
├── README.md           # Main documentation
├── architecture.md     # Technical architecture
├── STORYBOOK.md       # Storybook documentation
├── DOCS.md            # This file
├── src/               # Source code
├── .storybook/        # Storybook config
└── package.json       # Dependencies
```

## 🔍 Finding What You Need

**Want to know...**
- How to run the app? → `README.md`
- How pagination works? → `architecture.md`
- What components exist? → `STORYBOOK.md`
- Project structure? → `README.md` or `architecture.md`
- How to add a new feature? → `architecture.md` (Dependency Rules)

## 📝 Recent Changes

All documentation has been consolidated and updated:
- ✅ Removed 4 outdated docs (STORYBOOK_STATUS, STORYBOOK_STRUCTURE, STRUCTURE_SUMMARY, ICON_UPDATES)
- ✅ Updated README with comprehensive feature list
- ✅ Renamed STORYBOOK_UPDATED → STORYBOOK
- ✅ Architecture doc reflects current structure
- ✅ No duplicate information across files

## 🎯 Documentation Principles

Each doc has a clear purpose:
- **README** - User-facing, getting started
- **architecture** - Developer-facing, implementation details
- **STORYBOOK** - Component inventory and visual testing

No overlap, no duplication, easy to maintain!
