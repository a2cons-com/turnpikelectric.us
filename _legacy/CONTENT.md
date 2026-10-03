# Legacy site + online presence (captured 2026-10-03)

## Old site: https://www.turnpikelectric.us/

A single page made with Next.js (static export, hosted on Vercel, © 2021). Files in this folder:
`index.html`, 4 photos, `favicon.ico`, and the compiled CSS in `_next/`. The compiled JS is
kept locally but git-ignored because it contains an SMTP token.

How the old site works: the inquiry and job-application forms send email straight from the
browser through **smtpjs.com** with a `SecureToken` embedded in the public JS (To/From:
`website@turnpikelectric.us`). Anyone can pull that token out and send mail through their
SMTP account. **Rotate or revoke that SMTP credential once the new site is live.**
The job form also asks for date of birth, so drop that field.

### Copy (verbatim)
- Title: **Turnpike Electric**, tagline **From Tallahassee to the Keys**
- CTA: **Now Hiring Electricians**, "Click Here to Apply"
- About: *Founded in 2010 with only one premise... Quality Over Anything and Everything.*
  "Over 10 years of experience in Commercial, Residential, Hotels and Light Industrial
  projects. New construction and remodeling. Fire Alarm, Data, Generators and medium to
  large UPS installations are also part of our line of work. We can provide **Turnkey Solutions**."
- Inquiry form: first/last name, email, "How can we help?", reply "within 2 business days"
- Job application: name, email, DOB, years of experience, previous employer, has trade tools, description; reply "within 5 business days"

### Contact
- Phone: (786) 712-1024
- Fax: (305) 675-3711
- FL license: EC13004836 (Certified Electrical Contractor)
- Email: website@turnpikelectric.us (form target only, never shown on the page)

### Photos
| file | size | notes |
|---|---|---|
| lightning.jpg | 3440×1440 | stock lightning |
| Panels_Multiple_Repairs2.jpg | 2313×1538 | panel work |
| Breaker_Two.jpg | 3264×1836 | breaker close-up |
| Monticello_Outside.jpg | 2224×1791 | Monticello hotel exterior, Miami Beach (project) |

## Other online presence

No company Facebook, Instagram, LinkedIn, Google Business or Yelp page was found. A few
look-alike accounts exist, but they belong to other companies: Turnpike Electrical Ltd (UK),
Turnpike Electric Inc (Pine Brook NJ and Boston), and @turnpike.global.

Public records and directory listings:
- **DBPR:** Sterling Velazquez dba Turnpike Electric Corp., Certified Electrical Contractor EC13004836. The listing showed expiry **2026-08-31**, so check that it was renewed.
- **BuildZoom:** 515 permits worth about $6.76M. Score 113, in the top 3% of FL contractors. Also holds City of Lakeland license AEC-11785. Insurance: Ascendant Commercial; workers comp through AmTrust. Address listed: **770 Ponce De Leon, Coral Gables, FL 33134**. Permits come from Miami, Fort Lauderdale, West Palm Beach, Punta Gorda and Lakeland, so the "Tallahassee to the Keys" claim holds up. Review (2013): "they get the job done right the first time. clean and fast. great customer service"
- **Angi:** 5.0/5 from 8 reviews; the site blocked automated fetching. Snippets: "the most efficient and reliable team you can hire for all electrical work", "very professional and knowledgeable". Mentions plans, permitting, inspections and vendor coordination (turnkey).
- **Indeed:** a company page exists (salaries only); the site blocked automated fetching.

## Brand
- Logo green `#4a7c44`, gray `#777777` (tagline), black slab-serif wordmark
- Logo: Florida outline drawn as power lines with a sine wave in it
