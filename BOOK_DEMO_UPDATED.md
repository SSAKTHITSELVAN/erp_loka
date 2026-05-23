# Book a Demo Modal - Updated with Google Forms Integration

## Changes Made

### 1. **Added Two New Fields**

**Company Name**
- Field name: `companyName`
- Icon: Building2
- Required field
- Placeholder: "Your company name"
- Google Form entry: `entry.268031843`

**Designation / Role**
- Field name: `designation`
- Icon: Briefcase
- Required field
- Placeholder: "e.g., CEO, Manager, Director"
- Google Form entry: `entry.2023820862`

---

### 2. **Proper Field Order** (Top to Bottom)

1. **Name** * (Text input)
2. **Email** * (Email input with validation)
3. **Phone Number** * (Tel input, +91 default, 10-digit validation)
4. **Company Name** * (Text input) - NEW
5. **Designation / Role** * (Text input) - NEW
6. **Address** * (Textarea, 2 rows)
7. **Preferred Date** * (Date picker)
8. **Preferred Time** * (Time picker)
9. **Are You Considering Purchasing SAP Business One Solutions / Services?** * (Yes/No radio)
10. **Your Requirements** * (Textarea, 4 rows)

**Layout:**
- Company Name & Designation: Side-by-side (2 columns on desktop, stacked on mobile)
- Date & Time: Side-by-side (2 columns on desktop, stacked on mobile)
- All other fields: Full width

---

### 3. **Google Forms Integration**

**Form URL:**
```
https://docs.google.com/forms/u/0/d/1jIBl6zp6nclSRxZ02z0WFo0JUwsxDPh2UZ1LrlL1JKk/formResponse
```

**Field Mapping:**

| Modal Field | Google Form Entry ID | Value |
|-------------|---------------------|-------|
| Name | `entry.2005620554` | Text |
| Email | `entry.1045781291` | Email (no validation on Google) |
| Address | `entry.1065046570` | Textarea |
| Phone | `entry.1166974658` | Text |
| Designation | `entry.2023820862` | Text |
| Company Name | `entry.268031843` | Text |
| Date | `entry.546718960` | Date string |
| Time | `entry.1621447213` | Time string |
| SAP Consideration | `entry.491470163` | "Yes" or "No" |
| Requirements | `entry.108957670` | Textarea |

---

### 4. **Form Submission Process**

**Client-Side Validation:**
1. All 10 fields must be filled
2. Email format validation (example@domain.com)
3. Phone validation (10 digits after +91)
4. Date cannot be in the past
5. All fields required before submission

**Submission Flow:**
1. User fills all fields
2. Click "Book Demo Now"
3. Validation runs
4. If errors: Red borders + error messages
5. If valid:
   - Button shows "Submitting..."
   - Data sent to Google Forms (POST request)
   - Success message appears
   - Form resets after 3 seconds
   - Modal closes automatically

**Technical Details:**
- Method: `POST`
- Mode: `no-cors` (to avoid CORS issues)
- Content-Type: `application/x-www-form-urlencoded`
- Data format: URL-encoded form data

---

### 5. **Email Validation**

**Note:** Google Forms does NOT validate email format on the server side. However, our modal validates on the client side before submission.

**Client-Side Email Validation:**
- Pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Must contain: `@` and `.`
- Example valid: `user@example.com`
- Example invalid: `user@example`, `user.example.com`

---

### 6. **Complete Form Data Structure**

When submitted, the data looks like:

```javascript
{
  name: "John Doe",
  email: "john@company.com",
  phone: "+91 9876543210",
  companyName: "ABC Corporation",
  designation: "CEO",
  address: "Mumbai, Maharashtra, India",
  date: "2026-05-25",
  time: "14:30",
  consideringSAP: "yes",
  requirements: "Need SAP Business One for manufacturing..."
}
```

---

### 7. **Validation Rules**

All fields are **required**:

✅ **Name:** Cannot be empty  
✅ **Email:** Must match email format  
✅ **Phone:** Must be 10 digits after +91  
✅ **Company Name:** Cannot be empty  
✅ **Designation / Role:** Cannot be empty  
✅ **Address:** Cannot be empty  
✅ **Date:** Must be selected, cannot be past date  
✅ **Time:** Must be selected  
✅ **SAP Consideration:** Must select Yes or No  
✅ **Requirements:** Cannot be empty  

**Error Display:**
- Red border on invalid fields
- Error message below field
- Real-time clearing (errors disappear when user types)

---

### 8. **User Experience Flow**

**Step 1: Opening Modal**
- User clicks "Book a Demo" button
- Modal fades in with backdrop
- Form slides up

**Step 2: Filling Form**
- User fills all 10 required fields
- Validation happens on submit (not on blur)
- Clear visual feedback with icons

**Step 3: Submitting**
- Click "Book Demo Now"
- Button shows "Submitting..." (disabled state)
- Data sent to Google Forms in background

**Step 4: Success**
- Green checkmark appears
- "Demo Booked Successfully!" message
- "We'll contact you shortly" subtext
- Auto-closes after 3 seconds

**Step 5: Closing**
- Modal closes automatically
- Form resets to empty state
- Ready for next submission

---

### 9. **Loading States**

**Before Submit:**
- Button: "Book Demo Now"
- Enabled state
- Hover effects active

**During Submit:**
- Button: "Submitting..."
- Disabled state (cursor: not-allowed)
- Opacity: 50%
- No hover effects

**After Success:**
- Success screen shown
- Countdown to auto-close (3s)

---

### 10. **Google Forms Benefits**

✅ **No Backend Required** - Direct submission to Google  
✅ **Automatic Spreadsheet** - All submissions in Google Sheets  
✅ **Email Notifications** - Optional (configure in Google Forms)  
✅ **Easy to Manage** - View/edit responses in Google Forms  
✅ **Free** - No hosting or database costs  
✅ **Reliable** - Google infrastructure  

---

### 11. **Accessing Submissions**

**View Responses:**
1. Go to Google Forms
2. Open: "ERP-LOKA (Contact information)"
3. Click "Responses" tab
4. View in table or open linked Google Sheet

**Get Notifications:**
1. In Google Forms → Settings
2. Enable "Email notifications for new responses"
3. Receive email for each submission

---

### 12. **Field Icons Used**

- Name: `User`
- Email: `Mail`
- Phone: `Phone`
- Company Name: `Building2`
- Designation: `Briefcase`
- Address: `MapPin`
- Date: `Calendar`
- Time: `Clock`
- SAP Question: `CheckCircle`
- Requirements: `FileText`

---

### 13. **Technical Implementation**

**Submission Code:**
```javascript
const formBody = new URLSearchParams({
  'entry.2005620554': formData.name,
  'entry.1045781291': formData.email,
  'entry.1065046570': formData.address,
  'entry.1166974658': formData.phone,
  'entry.2023820862': formData.designation,
  'entry.268031843': formData.companyName,
  'entry.546718960': formData.date,
  'entry.1621447213': formData.time,
  'entry.491470163': formData.consideringSAP === 'yes' ? 'Yes' : 'No',
  'entry.108957670': formData.requirements,
});

await fetch('https://docs.google.com/forms/u/0/d/1jIBl6zp6nclSRxZ02z0WFo0JUwsxDPh2UZ1LrlL1JKk/formResponse', {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: formBody.toString(),
});
```

---

### 14. **Files Modified**

1. **`src/components/common/BookDemoModal.jsx`**
   - Added `companyName` field
   - Added `designation` field
   - Reordered fields
   - Added Google Forms submission
   - Added loading state
   - Updated validation
   - Changed Address to textarea

---

## Summary

✅ **10 required fields** (up from 8)  
✅ **Proper field order** maintained  
✅ **Google Forms integration** working  
✅ **All fields validated** before submission  
✅ **Email format validation** (client-side)  
✅ **Phone format validation** (+91 with 10 digits)  
✅ **Loading states** during submission  
✅ **Success message** with auto-close  
✅ **No backend required** - Google handles storage  
✅ **Professional UI/UX** maintained  

---

**Status:** ✅ Updated and integrated with Google Forms

**Date:** May 23, 2026
