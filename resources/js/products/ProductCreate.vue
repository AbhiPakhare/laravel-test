<script setup>
import { reactive } from "vue";

const product = reactive({
    name: "",
    description: "",
    image: "",
    type: "",
    price: "",
    quantity: "",
});

const getImage = () => {
    let image =
        "https://png.pngtree.com/png-clipart/20190920/original/pngtree-file-upload-icon-png-image_4646955.jpg";
    if (form.image) {
        if (form.image.indexOf("base64") != -1) {
            image = form.image;
        } else {
            image = "upload/" + form.image;
        }
    }
    return image;
};
const handleFileChange = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        form.image = reader.result;
    };
    reader.readAsDataURL(file);
};

const handleCreateProduct = () => {
    axios.post("/api/products", product).then((res) => {});
};
</script>

<template>
    <br /><br /><br />
    <div class="products__create">
        <div
            class="products__create__titlebar dflex justify-content-between align-items-center"
        >
            <div class="products__create__titlebar--item">
                <h1 class="my-1">Add Product</h1>
            </div>
            <div class="products__create__titlebar--item">
                <button
                    class="btn btn-secondary ml-1"
                    @click="handleCreateProduct"
                >
                    Save
                </button>
            </div>
        </div>

        <div class="products__create__cardWrapper mt-2">
            <div class="products__create__main">
                <div
                    class="products__create__main--addInfo card py-2 px-2 bg-white"
                >
                    <p class="mb-1">Name</p>
                    <input type="text" v-model="product.name" class="input" />

                    <p class="my-1">Description (optional)</p>
                    <textarea
                        cols="10"
                        rows="5"
                        class="textarea"
                        v-model="product.description"
                    ></textarea>

                    <div class="products__create__main--media--images mt-2">
                        <ul
                            class="products__create__main--media--images--list list-unstyled"
                        >
                            <li
                                class="products__create__main--media--images--item"
                            >
                                <div
                                    class="products__create__main--media--images--item--imgWrapper"
                                >
                                    <img
                                        class="products__create__main--media--images--item--img"
                                        alt=""
                                        @change="getImage"
                                    />
                                </div>
                            </li>
                            <!-- upload image small -->
                            <li
                                class="products__create__main--media--images--item"
                            >
                                <form
                                    class="products__create__main--media--images--item--form"
                                >
                                    <label
                                        class="products__create__main--media--images--item--form--label"
                                        for="myfile"
                                        >Add Image</label
                                    >
                                    <input
                                        class="products__create__main--media--images--item--form--input"
                                        type="file"
                                        id="myfile"
                                    />
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="products__create__sidebar">
                <!-- Product Organization -->
                <div class="card py-2 px-2 bg-white">
                    <!-- Product unit -->
                    <div class="my-3">
                        <p>Product type</p>
                        <input type="text" class="input" v-model="product.type" />
                    </div>
                    <hr />

                    <!-- Product invrntory -->
                    <div class="my-3">
                        <p>Inventory</p>
                        <input type="text" class="input" v-model="product.quantity" />
                    </div>
                    <hr />

                    <!-- Product Price -->
                    <div class="my-3">
                        <p>Price</p>
                        <input type="text" class="input" v-model="product.price" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer Bar -->
        <div class="dflex justify-content-between align-items-center my-3">
            <p></p>
            <button class="btn btn-secondary" @click="handleCreateProduct">
                Save
            </button>
        </div>
    </div>
</template>
