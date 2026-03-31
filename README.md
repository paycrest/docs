# Paycrest Protocol Documentation

This directory contains the complete documentation for the Paycrest Protocol, built with Mintlify.

## Mission

> **"To accelerate the creation of democratized payment systems of the future"**

Paycrest is building the infrastructure for a more inclusive, transparent, and efficient global payment ecosystem. Our documentation reflects this mission by providing comprehensive, accessible resources for developers, providers, and users of the protocol.

## Structure

```
docs/
├── docs.json                 # Mintlify configuration (navigation, theme)
├── openapi-v1.yaml          # OpenAPI spec — legacy v1 API
├── openapi-v2.yaml          # OpenAPI spec — current v2 API
├── logo/                    # Brand assets
│   ├── dark.svg
│   └── light.svg
├── introduction.mdx         # Main introduction page
├── quickstart.mdx          # Getting started guide
├── protocol-overview.mdx   # Protocol architecture overview
├── concepts/               # Core concept pages
│   └── participants.mdx    # Protocol participants
├── api-reference/          # API documentation
│   └── introduction.mdx    # API reference introduction
├── implementation/         # Implementation guides
├── guides/                # How-to guides
└── protocol/              # Protocol governance
```

## Getting Started

### Prerequisites

- Node.js 16+ installed
- Mintlify CLI installed

### Installation

1. Install Mintlify CLI:
```bash
npm install -g mintlify
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
mintlify dev
```

The documentation will be available at `http://localhost:3000`.

## Documentation Sections

### Getting Started
- **Introduction**: Overview of the Paycrest Protocol
- **Quickstart**: Step-by-step guide to create your first payment order
- **Protocol Overview**: Deep dive into architecture and components

### Core Concepts
- **Participants**: Understanding Senders, Recipients, Providers, and Aggregators
- **Architecture**: Technical architecture and component interactions
- **Order Lifecycle**: How payment orders flow through the system
- **KYC/KYB**: Identity verification and compliance requirements

### API Reference
- **Introduction**: API authentication, endpoints, and usage
- **Sender Endpoints**: Create and manage payment orders
- **Provider Endpoints**: Fulfill orders and manage liquidity
- **General Endpoints**: Protocol information and utilities

### Implementation Guides
- **Aggregator Setup**: Deploy and configure aggregator nodes
- **Provider Setup**: Set up provider infrastructure and PSP integrations
- **Sender Integration**: Integrate the Paycrest API into your application
- **Smart Contracts**: Understanding the Gateway contract and interactions

### Guides
- **Creating Payment Orders**: Best practices for order creation
- **Fulfilling Orders**: How providers fulfill payment orders
- **Multi-Chain Support**: Working with different blockchain networks
- **Security Best Practices**: Security considerations and recommendations

### Protocol
- **PIP-0 Overview**: Protocol Improvement Proposal overview
- **Governance**: Protocol governance and decision-making
- **Security Considerations**: Security model and considerations

## Configuration

### docs.json

The main configuration file that defines:

- **Navigation structure**: How pages are organized (including version tabs)
- **Branding**: Logo, colors, and theme
- **Social links**: GitHub, Community, etc.

### openapi-v1.yaml and openapi-v2.yaml

Split OpenAPI specs (v1 legacy vs v2 current) that define:

- **API endpoints** for that version
- **Request/response schemas**
- **Authentication**: API key (`API-Key` header)
- **Examples** used by Mintlify API pages

API Reference `.mdx` files reference the appropriate file in frontmatter (e.g. `openapi: "openapi-v2.yaml POST /sender/orders"`).

## Customization

### Adding Pages

1. Create a new `.mdx` file in the appropriate directory
2. Add frontmatter with title and description
3. Update `docs.json` navigation to include the new page

### Styling

The documentation uses Mintlify's built-in components:

- `<Card>`: For feature highlights
- `<Steps>`: For step-by-step guides
- `<Note>`: For important information
- `<CodeGroup>`: For multi-language code examples

### API Documentation

The API documentation is generated from `openapi-v1.yaml` / `openapi-v2.yaml` and the `api-reference/**/*.mdx` pages. To update:

1. Modify the correct spec file for the version you are changing
2. Restart or refresh local preview; changes show under API Reference

## Deployment

### GitHub Pages

1. Push changes to the repository
2. Mintlify will automatically build and deploy
3. The documentation will be available at your configured domain

### Custom Domain

1. Configure your domain in the Mintlify dashboard
2. Update DNS settings as instructed
3. The documentation will be available at your custom domain

## Contributing

### Adding Content

1. Create a new `.mdx` file
2. Follow the existing structure and formatting
3. Include frontmatter with title and description
4. Update navigation in `docs.json`

### Updating API Documentation

1. Modify `openapi-v1.yaml` and/or `openapi-v2.yaml` (and any linked MDX `openapi:` frontmatter)
2. Test locally with `mintlify dev`

### Code Examples

When adding code examples:

- Use syntax highlighting for the appropriate language
- Include comments explaining the code
- Provide examples for multiple languages when possible
- Test the examples to ensure they work

## Support

For documentation issues or questions:

- **GitHub**: Create an issue in the repository
- **Discord**: Ask in the #documentation channel
- **Email**: Contact the documentation team

## License

This documentation is licensed under the same license as the Paycrest Protocol. 