import { InferType, mixed, number, object, string } from 'yup';

const martketplaceDto = object({
  playerId: string().required("L'id du joueur est requis")
})

type MarketplaceDtotype = InferType<typeof martketplaceDto>

export {martketplaceDto, MarketplaceDtotype}
