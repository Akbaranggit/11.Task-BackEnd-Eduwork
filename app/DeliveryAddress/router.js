const { police_check } = require("../../middlewares");
const deliveryAddressController = require("./controller");

const router = require("express").Router();

router.post(
  "/delivery-address",
  police_check("create", "DeliveryAddress"),
  deliveryAddressController.store
);

router.put("/delivery-address/:id", deliveryAddressController.update);
router.delete("/delivery-address/:id", deliveryAddressController.destroy);

router.get(
  "/delivery-address",
  police_check("view", "DeliveryAddress"),
  deliveryAddressController.index
);

module.exports = router;
