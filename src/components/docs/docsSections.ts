import HelpIcon from "../icons/HelpIcon";
import ProfileIcon from "../icons/ProfileIcon";
import SproutIcon from "../icons/SproutIcon";
import InventoryIcon from "../icons/InventoryIcon";
import LeaderboardIcon from "../icons/LeaderboardIcon";
import DocsIcon from "../icons/DocsIcon";
import FarmIcon from "../icons/FarmIcon";
import DeployerIcon from "../icons/DeployerIcon";

export const DOCS_SECTIONS = [
  {
    id: "registering",
    title: "Registering a Gardener Profile",
    path: "registering",
    Icon: HelpIcon,
    description: "Learn how to create and set up your gardener profile",
  },
  {
    id: "profile",
    title: "The Sprout Profile",
    path: "profile",
    Icon: ProfileIcon,
    description: "Understanding your sprout profile and statistics",
  },
  {
    id: "conservatory",
    title: "The Conservatory",
    path: "conservatory",
    Icon: SproutIcon,
    description: "Guide to the conservatory and growing your sprout",
  },
  {
    id: "inventory",
    title: "Your Inventory & Resources",
    path: "inventory",
    Icon: InventoryIcon,
    description: "Managing your resources and inventory items",
  },
  {
    id: "farm",
    title: "The Farm",
    path: "farm",
    Icon: FarmIcon,
    description: "Discover and interact with Sprout-launched tokens",
  },
  {
    id: "deployer",
    title: "Sprout Deployer",
    path: "deployer",
    Icon: DeployerIcon,
    description: "Launch your own token through Sprout",
  },
  {
    id: "leaderboard",
    title: "The Leaderboard",
    path: "leaderboard",
    Icon: LeaderboardIcon,
    description: "Understanding the community leaderboard",
  },
  {
    id: "v2",
    title: "Sprout Growth Cycles & Bloom Stages",
    path: "v2",
    Icon: DocsIcon,
    description: "Information about Sprout Growth Cycles and Bloom Stages",
  },
] as const;
