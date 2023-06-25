/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docSidebar: [
    {
      type: "category",
      label: "Docs",
      items: ["intro", "about", "jobseeker", "startup"],
    },
    // {
    //   type: "link",
    //   label: "Blog",
    //   href: "/blog",
    // },
    // { type: "autogenerated", dirName: "." },
  ],
};
