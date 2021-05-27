import React from "react"
import { FaCreditCard, FaBuromobelexperte, FaCat, FaGulp } from "react-icons/fa"

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    page: "products",
    label: "new page",
    url: `/products/new_page`,
    icon: <FaCat className="icon" />,
  },
  {
    page: "products",
    label: "payments",
    url: `/products/payments`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "products",
    label: "terminal",
    url: `/products/terminal`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "products",
    label: "connect",
    url: `/products/connect`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "products",
    label: "billing",
    url: `/products/billing`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "developers",
    label: "documentation",
    url: `/developers/documentation`,
    icon: <FaBuromobelexperte className="icon" />,
  },
  {
    page: "developers",
    label: "libraries",
    url: `/developers/libraries`,
    icon: <FaBuromobelexperte className="icon" />,
  },
  {
    page: "developers",
    label: "plugins",
    url: `/developers/plugins`,
    icon: <FaBuromobelexperte className="icon" />,
  },
  {
    page: "company",
    label: "jobs",
    url: `/company/jobs`,
    icon: <FaGulp className="icon" />,
  },
  {
    page: "company",
    label: "customers",
    url: `/company/customers`,
    icon: <FaGulp className="icon" />,
  },
]
