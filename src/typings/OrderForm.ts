interface OrderFormContext {
  orderForm: OrderForm
  loading: boolean
}

interface OrderFormItem {
  additionalInfo: ItemAdditionalInfo
  availability: string
  detailUrl: string
  id: string
  imageUrl: string
  listPrice: number
  measurementUnit: string
  name: string
  price: number
  productId: string
  quantity: number
  sellingPrice: number
  seller: string
  skuName: string
  skuSpecifications: SKUSpecification[]
  uniqueId: string
  productCategories: Record<string, string>
  productCategoryIds: string
  productRefId: string
  refId: string
  parentItemIndex: number | null
  productClusters: ProductClusters[]
  clusterHighlights: ClusterHighlights[]
}

interface OrderFormItemWithIndex extends OrderFormItem {
  index: number
}

interface ItemAdditionalInfo {
  brandName: string
}

interface SKUSpecification {
  fieldName: string
  fieldValues: string[]
}

interface ProductClusters {
  id: string
  name: string
}

interface ClusterHighlights {
  id: string
  name: string
}

interface OrderForm {
  id: string
  items: OrderFormItem[]
  marketingData: MarketingData
  totalizers: Totalizer[]
  value: number
  messages: OrderFormMessages
  loading: boolean
  shippingData: ShippingData
  clientProfileData: ClientProfileData
}

interface MarketingData {
  coupon: string
}

interface Totalizer {
  id: string
  name: string
  value: number
}

interface OrderFormMessages {
  couponMessages: Message[]
  generalMessages: Message[]
}

interface Message {
  code: string
  status: string
  text: string
}

interface ShippingData {
  attachmentId: string
  address: Address
  availableAddresses: Address[]
  logisticsInfo: LogisticsInfo[]
  selectedAddresses: Address[]
}

interface Address {
  addressType: string
  receiverName: string
  addressId: string
  postalCode: string
  city: string
  state: string
  country: string
  street: string
  number: string
  neighborhood: string
  complement: string
  reference: null | string
}

interface LogisticsInfo {
  itemIndex: number
  selectedSla: string
  selectedDeliveryChannel: string
  addressId: string
  slas: SLA[]
  shipsTo: string[]
  itemId: string
  deliveryChannels: DeliveryChannel[]
}

interface SLA {
  id: string
  deliveryChannel: string
  name: string
  deliveryIds: DeliveryId[]
  shippingEstimate: string
  shippingEstimateDate: null | string
  lockTTL: null | number
  availableDeliveryWindows: AvailableDeliveryWindow[]
  deliveryWindow: DeliveryWindow[] | null
  price: number
  tax: number
  pickupStoreInfo: PickupStoreInfo
  pickupPointId: null | string
  pickupDistance: number
  polygonName: null | string
  transitTime: string
}

interface DeliveryId {
  courierId: string
  warehouseId: string
  dockId: string
  courierName: string
  quantity: number
}

interface AvailableDeliveryWindow {
  startDateUtc: string
  endDateUtc: string
  price: number
  tax: number
}

interface DeliveryWindow {
  startDateUtc: string
  endDateUtc: string
  price: number
  tax: number
}

interface PickupStoreInfo {
  isPickupStore: boolean
  friendlyName: string
  address: Address
  additionalInfo: string
  dockId: string
  distance: number
}

interface DeliveryChannel {
  id: string
}

interface ClientProfileData {
  email: string
  firstName: string
  lastName: string
  document: string
  documentType: string
  phone: string
  corporateName: null | string
  tradeName: null | string
  corporateDocument: null | string
  stateInscription: null | string
  corporatePhone: null | string
  isCorporate: boolean
}
