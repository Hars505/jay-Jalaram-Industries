# Security Architecture & Compliance Guidelines

This document details the security architecture, edge transport policies, input validation standards, anti-CSRF protection, and supply chain security guidelines enforced across the Jay Jalaram Industries codebase as documented in [`AGENTS.md`](file:///c:/Study/JJIndustries/AGENTS.md).

---

## 1. HTTP & Edge Transport Security Policy

Every HTTP response emitted by the Jay Jalaram Industries application server MUST strictly enforce the following security response headers:

### Enforced Response Headers
- **`Content-Security-Policy`**: Restricts allowed script sources, style origins, frame ancestors, and object embeddings. Prevents external script injection.
- **`X-Frame-Options: DENY`**: Mitigates clickjacking attacks by forbidding iframe framing of any site route.
- **`X-Content-Type-Options: nosniff`**: Prevents browser MIME-type sniffing attacks.
- **`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`**: Forces HTTPS enforcement for 2 years with preloading.
- **`Referrer-Policy: strict-origin-when-cross-origin`**: Minimizes sensitive URL referrer leakage on cross-domain transitions.
- **`Permissions-Policy`**: Disables invasive hardware APIs including `camera=()`, `microphone=()`, `geolocation=()`, and `payment=()`.
- **Banner Stripping**: Server identity headers such as `X-Powered-By` are stripped in production builds.

---

## 2. Input Validation & XSS Prevention

```mermaid
flowcard
    RequestPayload["Incoming Form / API Request"] --> ZodSchema["Zod Strict Schema Validation"]
    ZodSchema --> Sanitization["HTML Stripping & Character Escaping"]
    Sanitization --> ReactJSX["Automatic Contextual Encoding in JSX"]
    ReactJSX --> SafeDOM["Safe Render to User Browser"]
```

### Mandated Guidelines
1. **Schema Validation**: All incoming API requests, server actions, and form payloads MUST be validated using strict [Zod](https://zod.dev) schemas prior to processing.
2. **HTML Sanitization**: Never render raw HTML strings or un-sanitized user strings via `dangerouslySetInnerHTML`.
3. **JSX Encoding**: Rely exclusively on React 19's automatic JSX escaping for dynamic values.

---

## 3. Anti-CSRF & Session Security

1. **CSRF Protection**: All server functions and state mutations MUST pass through `@tanstack/react-start`'s CSRF protection middleware (`createCsrfMiddleware`).
2. **Cookie Security**: Authentication, session, or tracking cookies MUST enforce the following security attributes:
   - `HttpOnly`: Blocks client-side JavaScript access (`document.cookie`).
   - `Secure`: Ensures cookies are only transmitted over HTTPS connections.
   - `SameSite=Strict`: Prevents cross-site request forgery cookie inclusion.

---

## 4. Supply Chain & Credentials Protection

1. **Zero Credentials in Source**: API keys, database credentials, server secrets, and private keys MUST NEVER be committed to Git. All secrets are loaded via environment variables (`process.env`).
2. **Supply Chain Defense**: The repository configures `bunfig.toml` to guard against zero-day compromised dependency releases by enforcing minimum release age criteria:
   ```toml
   [install]
   minimumReleaseAge = 86400 # 24-hour buffer against compromised package releases
   ```
