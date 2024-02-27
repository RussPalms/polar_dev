import { VaultCollection } from '@/components/Vault/VaultCollection'
import { VaultEntity, VaultEntityType } from '@/components/Vault/VaultEntity'

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac pretium nunc. Ut pulvinar commodo purus. Mauris sed scelerisque ligula, vel accumsan magna. Quisque eu sem eget urna iaculis mattis eu eu mauris.\n\nInteger faucibus blandit ligula sed fermentum. Nam luctus libero ac hendrerit eleifend. Integer luctus ligula sollicitudin ligula porta, sed mollis neque pretium.`

const createdAt = new Date(`2023-0${Math.round(Math.random() * 9)}-01`)

export const vaultCollectionMocks: VaultCollection[] = [
  {
    id: '1',
    name: 'Thoughts & Ramblings',
    slug: 'spline-3d-tutorial',
    description: `A set of inspirational posts I've collected over the years.`,
    entities: [
      {
        id: '1',
        slug: 'spline-3d-tutorial',
        name: 'Spline 3D Tutorial',
        description: lipsum,
        type: VaultEntityType.TUTORIAL,
        videos: [
          {
            name: 'sample.mp4',
            url: '/videos/sample.mp4',
            duration: 600,
          },
        ],
        organization: {
          name: 'emilwidlund',
          avatarUrl: 'https://avatars.githubusercontent.com/u/1025102?v=4',
        },
        image:
          'https://cdn.midjourney.com/8c128e1d-ee8e-4923-8f0a-4bcb5ec9b219/0_1.webp',
        createdAt,
      },
    ],
    subscriptionTier: {
      id: '1',
      name: 'Tier 1',
    },
    organization: {
      name: 'emilwidlund',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1025102?v=4',
    },
    createdAt,
  },
]

export const vaultMocks: VaultEntity[] = [
  {
    id: '1',
    slug: 'spline-3d-tutorial',
    name: 'Spline 3D Tutorial',
    description: lipsum,
    type: VaultEntityType.TUTORIAL,
    videos: [
      {
        name: 'sample.mp4',
        url: '/videos/sample.mp4',
        duration: 600,
      },
    ],
    organization: {
      name: 'emilwidlund',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1025102?v=4',
    },
    image:
      'https://cdn.midjourney.com/8c128e1d-ee8e-4923-8f0a-4bcb5ec9b219/0_1.webp',
    createdAt,
  },
  {
    id: '2',
    name: 'Product 2',
    slug: 'product-2',
    description: lipsum,
    type: VaultEntityType.DIGITAL,
    files: [
      {
        name: 'sample.jpg',
        url: 'https://cdn.midjourney.com/2cd08644-bdbd-4abf-ac23-245ed0cd9d17/0_1.webp',
        size: 120000,
      },
    ],
    organization: {
      name: 'emilwidlund',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1025102?v=4',
    },
    image:
      'https://cdn.midjourney.com/2cd08644-bdbd-4abf-ac23-245ed0cd9d17/0_1.webp',
    createdAt,
  },
  {
    id: '5',
    slug: 'product-5',
    name: 'Product 5',
    description: lipsum,
    type: VaultEntityType.DIGITAL,
    files: [
      {
        name: 'sample.jpg',
        url: 'https://cdn.midjourney.com/96289ed6-62e6-4084-b4d8-f27cb06c5040/0_2.webp',
        size: 68000,
      },
    ],
    organization: {
      name: 'emilwidlund',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1025102?v=4',
    },
    image:
      'https://cdn.midjourney.com/96289ed6-62e6-4084-b4d8-f27cb06c5040/0_2.webp',
    createdAt,
  },
  {
    id: '6',
    slug: 'product-6',
    name: 'Product 6',
    description: lipsum,
    type: VaultEntityType.DIGITAL,
    organization: {
      name: 'emilwidlund',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1025102?v=4',
    },
    files: [
      {
        name: 'sample.jpg',
        url: 'https://cdn.midjourney.com/138817cd-5bfe-4ef1-839e-6ad3b1b74629/0_2.webp',
        size: 389499,
      },
    ],
    image:
      'https://cdn.midjourney.com/138817cd-5bfe-4ef1-839e-6ad3b1b74629/0_2.webp',
    createdAt,
  },
]
