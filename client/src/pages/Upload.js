import React from 'react';

function Upload() {
    return (
        <div>
            <h2 id="upload">Upload</h2>
            <form class="create-form" >
                <div class="form-group">
                    <label for="ca">Product name:</label>
                    <input type="text" id="product_name" name="product_name" required />
                    <div class="invalid-feedback">
                        Please enter product name.
                        </div>
                </div>
                <div class="form-group">
                    <label for="condition">Condition:</label>
                    <select class="form-control" id="condition" required>
                        <option>New</option>
                        <option>Great</option>
                        <option>Fair</option>
                        <option>Okay</option>
                        <option>Bad</option>
                    </select>
                    <div class="invalid-feedback">
                        Please choose the condition of product.
                    </div>
                </div>
                <div class="form-group">
                    <label for="ca">Description:</label>
                    <input type="text" id="description" name="description" required />
                    <div class="invalid-feedback">
                        Please enter description of product.
                    </div>
                </div>
                <div class="form-group">
                    <label for="contact">Email address</label>
                    <input type="email" class="form-control" id="contact" placeholder="name@example.com" required />
                    <div class="invalid-feedback">
                        Please enter email address for contact
                    </div>
                </div>
            </form>
        </div>

    );
}
export default Upload;