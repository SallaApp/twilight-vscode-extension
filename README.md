<div id="top"></div>

<br />
<div align="center"> 
  <a href="https://salla.dev"> 
    <img src="https://salla.dev/wp-content/themes/salla-portal/dist/img/salla-logo.svg" alt="Logo" width="80" height="80"> 
  </a>
  <h1 align="center">Twilight VSCode Extension</h1>
  <p align="center">
    The intelligent tooling to use Salla's Twilight Theme Engine in your VSCode editor.
    <br />
    <a href="https://salla.dev/"><strong>Explore our blogs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SallaApp/twilight-vscode-extension/issues/new">Report Bug</a> · 
    <a href="https://github.com/SallaApp/twilight-vscode-extension/discussions/new">Request Feature</a> . <a href="https://t.me/salladev">&lt;/Salla Developers&gt;</a> . <a href="https://docs.salla.dev/docs/twilight-themes-documentation">Official Documentation</a> 
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li>
      <a href="#features">Features</a>
    </li>
      </ul>
    </li>
    <li>
        <a href="#usage">Usage</a>
        <ul>
            <li><a href="#easy-mode-">Components</a></li>
        </ul>
    </li>
    <li><a href="#release-notes">Release Notes</a></li>  
    <li><a href="#support">Support</a></li>  
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

# Overview

Twilight JS Web Components are a collection of high-level building blocks and reusable web components that can be built together to swiftly develop the UI for custom Salla Themes, governed by clear guidelines. Twilight VSCode extension enhances the development experience by providing a set of featuers for the Twilight JS Web Components, such as autocomplete, code snippets and intellisense, when working in Visual Studio Code.

<img src="https://i.ibb.co/PYnXczP/Clean-Shot-2022-05-17-at-08-57-11.gif" data-canonical-src="https://i.ibb.co/PYnXczP/Clean-Shot-2022-05-17-at-08-57-11.gif" width="800px" height="100%" />

## Getting Started
### Installation

Twilight VSCode extension can be easily installed straight from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/). 

### Features

Salla's twilight VSCode extension has a range of rich features that includes:

- __Intellesense suggestions for the JS Web Components:__ When start writing any of the supported JS Web Component in the VSCode editor, the intelliSense feature will start showing a list of all the available components.

- __Syntax and Code Auto-completion:__ Writing code faster with fewer keystrokes result in saving time. That said, typos can be corrected with the autocomplete feature as well as enhancing consistency and compatibility based on the existing code and development style.
## Usage

If you're familiar with the concept of JS Web Components or have read the [official documentation](https://docs.salla.dev/docs/twilight-themes-documentation), consider the following scenario; Let's say you want to add a Button component to your project. You can do this by typing: <br> <br>

```html
<!-- Salla Default Button with no props -->
<salla-button>Hello World👋</salla-button>
```

<p align="right">(<a href="#top">back to top</a>)</p>

### Components

Below is a list of the ready-made Twilight JS Web Components which can be used easily. Following, in this part of the document, each component is explained in detail.

| Component                                                                         | Code Tag                     | Description                                                                                                                      |
| --------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [Branches](https://docs.salla.dev/docs/twilight-themes-documentation/70422e4259f02-branches)                           | `salla-branches`             | Header component that redirects merchants to a specific branch owned by the store.                                                |
| [Button](https://docs.salla.dev/docs/twilight-themes-documentation/f973f4bbc269b-button)                               | `salla-button`               | Customizable Button component.                                                                                                    |
| [Infinite Scroll](https://docs.salla.dev/docs/twilight-themes-documentation/ede37d6e84859-infinite-scroll)           | `salla-infinite-scroll`      | Items that can be scrolled infinitely.                                                                                           |
| [Localization](https://docs.salla.dev/docs/twilight-themes-documentation/559cc67721f74-localization)                   | `salla-localization-modal`   | Modal dialoug which merchants can select languages/currencies from.                                                              |
| [Login](https://docs.salla.dev/docs/twilight-themes-documentation/0796e7fb0464b-login)                                 | `salla-login-modal`          | Ready-made sign-in/sign-up modal.                                                                                                |
| [Modal](https://docs.salla.dev/docs/twilight-themes-documentation/32babc5658e91-modal)                                 | `salla-modal`                | Modal dialoug that momentarily prevents interactions.                                                                             |
| [Offer](https://docs.salla.dev/docs/twilight-themes-documentation/1bb759464b884-offer)                                 | `salla-offer-modal`          | Modal dialoug which merchants can select offers related to product(s) they added to the cart.                                     |
| [Product Availability](https://docs.salla.dev/docs/twilight-themes-documentation/2d4dd6d9016bf-product-availability) | `salla-product-availability` | Modal dialoug where registered merchants can be notified when a product is available.                                             |
| [Rating](https://docs.salla.dev/docs/twilight-themes-documentation/1c81291fb13c7-rating)                               | `salla-rating-modal`         | Modal dialoug prompting merchants to rate a store/product/shipping company after an order purchase has been completed.            |
| [Search](https://docs.salla.dev/docs/twilight-themes-documentation/8379c482cea4b-search)                               | `salla-search`               | Conduct the search capbility within the store.                                                                                    |
| [Tel Input](https://docs.salla.dev/docs/twilight-themes-documentation/82c778cf6f21f-tel-input)                       | `salla-tel-input`            | Input field for accepting merchants' phone number, with country key/code prefix.                                                  |
| [Verify](https://docs.salla.dev/docs/twilight-themes-documentation/634794ef9a954-verify)                               | `salla-verify`               | Dependent Salla Login component where merchants who have updated their Profile details are followed up with a verification modal. |

<p align="right">(<a href="#top">back to top</a>)</p>

## Support

The team is always here to help you. Happen to face an issue? Want to report a bug? You can submit one here on Github using the [Issue Tracker](https://github.com/SallaApp/twilight-vscode-extension/issues/new). If you still have any questions, please contact us via the [Telegram Bot](https://t.me/SallaSupportBot) or join in the Global Developer Community on [Telegram](https://t.me/salladev).

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.
Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.
You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Credits

- [Salla](https://github.com/sallaApp)
- [All Contributors](../../contributors)
  
<p align="right">(<a href="#top">back to top</a>)</p>

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>