"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./product.entity");
const cloudinary_1 = require("cloudinary");
let ProductService = class ProductService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async createProduct(dto, imageUrl, imagePublicId) {
        const product = this.productRepo.create({
            ...dto,
            imageUrl,
            imagePublicId,
        });
        return this.productRepo.save(product);
    }
    async getAllProducts() {
        return this.productRepo.find();
    }
    async deleteProduct(id) {
        const product = await this.productRepo.findOne({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        await cloudinary_1.v2.uploader.destroy(product.imagePublicId);
        await this.productRepo.remove(product);
        return 'Product deleted successfully';
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=products.service.js.map