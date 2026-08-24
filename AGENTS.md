# Project Guidelines & Security Standards

This file contains repository guidelines, security standards, and agent instructions for Jay Jalaram Industries.

## Security Architecture & Enforcement Policy

To ensure maximum security posture and prevent unauthorized access, tampering, or data leakage:

### 1. HTTP & Edge Transport Security
- **Strict Headers Enforced**: Every server response must include:
  - `Content-Security-Policy`: Strict directives restricting script, style, frame-ancestor, and object origins.
  - `X-Frame-Options: DENY`: Prevents clickjacking framing attacks.
  - `X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing.
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`: Forces HTTPS connections.
  - `Referrer-Policy: strict-origin-when-cross-origin`: Minimizes referrer information leakage.
  - `Permissions-Policy`: Disables sensitive browser hardware APIs (camera, mic, geolocation, payment).
- **Banner Stripping**: Remove server identification headers (e.g. `X-Powered-By`).

### 2. XSS & Code Injection Prevention
- **Input Validation**: All incoming requests, form payloads, and server functions MUST validate inputs using strict Zod schemas.
- **HTML Sanitization**: Never render raw HTML strings or un-sanitized user input via `dangerouslySetInnerHTML`.
- **Contextual Encoding**: Use React's automatic JSX escaping for dynamic values.

### 3. CSRF & State Mutation Security
- **Anti-CSRF Protection**: All server functions must pass through `@tanstack/react-start`'s CSRF middleware (`createCsrfMiddleware`).
- **Cookie Security**: Authentication or session cookies must be scoped with `HttpOnly; Secure; SameSite=Strict`.

### 4. Secrets & Supply Chain Safety
- **Zero Credentials in Code**: API keys, database URLs, and private tokens must NEVER be committed to source control. Use environment variables.
- **Supply Chain Guard**: Maintain `minimumReleaseAge` checks in `bunfig.toml` to guard against zero-day package compromised releases.
