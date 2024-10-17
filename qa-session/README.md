# useState - Q&A

### Basic Regex pattern for email validation

`const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;`

- `^[a-zA-Z0-9._-]+`

  - The email should **start** with:
    - Letters (either uppercase `A-Z` or lowercase `a-z`)
    - Numbers (`0-9`)
    - A dot (`.`)
    - An underscore (`_`)
    - A dash (`-`)
  - The `+` means we can have **one or more** of these characters.

- `@`
  - There should be an **"@" sign** after the starting characters.
- `[a-zA-Z0-9.-]+`
  - After the "@" sign, the email can have:
    - Letters (either uppercase or lowercase)
    - Numbers
    - A dot
  - The `+` again means we can have **one or more** of these characters.
- `\.`
  - There should be a **dot** (like the one in ".com").
- `[a-zA-Z]{2,6}$`
  - After the dot, the email should **end** with:
    - Letters (either uppercase or lowercase)
  - The `{2,6}` means there should be **at least 2 and at most 6** of these letters at the end.

This pattern checks if an email has the right characters, in the right order. If an email follows this rule, it's probably valid. If not, it's not a correct email.

# Question

How is a 6-7 month bootcamp viewed by companies compared to someone who has studied for 2-3 years? Are those students favored more in job applications than those of us who have "only" studied for a few months?
