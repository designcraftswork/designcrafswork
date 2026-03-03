import React, { useState } from 'react';
import { LayoutDashboard, Package, List, DollarSign, Image as ImageIcon, Plus, Search, Edit, Trash2, CheckCircle2, ShoppingBag, X, Save } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { Product } from '../data/products';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const Admin = () => {
  const { products, categories, addProduct, updateProduct, deleteProduct, addCategory, updateCategory, deleteCategory } = useProducts();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCategory, setEditingCategory] = useState<any | null>(null);

  const [productForm, setProductForm] = useState<Omit<Product, 'id'>>({
    name: '',
    category: categories[0]?.id || '',
    price: 0,
    mrp: 0,
    rating: 4.5,
    reviews: 0,
    images: ['https://picsum.photos/seed/new/800/800'],
    description: '',
    sizes: ['Small', 'Medium', 'Large'],
    colors: ['Black', 'Gold'],
    isBestSeller: false,
    isNew: true
  });

  const [categoryForm, setCategoryForm] = useState({
    name: '',
    image: 'https://picsum.photos/seed/cat/800/800'
  });

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct.id, productForm);
    } else {
      addProduct(productForm);
    }
    setIsProductModalOpen(false);
    setEditingProduct(null);
    resetProductForm();
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      updateCategory(editingCategory.id, categoryForm);
    } else {
      addCategory(categoryForm);
    }
    setIsCategoryModalOpen(false);
    setEditingCategory(null);
    setCategoryForm({ name: '', image: 'https://picsum.photos/seed/cat/800/800' });
  };

  const resetProductForm = () => {
    setProductForm({
      name: '',
      category: categories[0]?.id || '',
      price: 0,
      mrp: 0,
      rating: 4.5,
      reviews: 0,
      images: ['https://picsum.photos/seed/new/800/800'],
      description: '',
      sizes: ['Small', 'Medium', 'Large'],
      colors: ['Black', 'Gold'],
      isBestSeller: false,
      isNew: true
    });
  };

  const openEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductForm({ ...product });
    setIsProductModalOpen(true);
  };

  const openEditCategory = (category: any) => {
    setEditingCategory(category);
    setCategoryForm({ name: category.name, image: category.image });
    setIsCategoryModalOpen(true);
  };

  const stats = [
    { label: 'Total Orders', value: '1,284', icon: Package, color: 'bg-blue-500' },
    { label: 'Total Revenue', value: '₹4,82,900', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Active Products', value: products.length.toString(), icon: List, color: 'bg-brand-gold' },
    { label: 'New Customers', value: '42', icon: LayoutDashboard, color: 'bg-purple-500' }
  ];

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Admin Sidebar */}
          <aside className="w-full lg:w-64 space-y-2">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <h4 className="font-bold text-sm">Admin Panel</h4>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">DesignCraftsWork</p>
                </div>
              </div>
            </div>

            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'products', label: 'Manage Products', icon: Package },
              { id: 'categories', label: 'Categories', icon: List },
              { id: 'orders', label: 'Orders', icon: ShoppingBag },
              { id: 'media', label: 'Media Library', icon: ImageIcon }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-6 py-4 rounded-xl font-bold text-sm transition-all",
                  activeTab === item.id ? "bg-brand-black text-white shadow-lg" : "bg-white text-gray-500 hover:bg-gray-100"
                )}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </aside>

          {/* Admin Content */}
          <main className="flex-1 space-y-8">
            {activeTab === 'dashboard' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4">
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg", stat.color)}>
                        <stat.icon size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                    <h3 className="font-serif text-xl font-bold mb-6">Recent Orders</h3>
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold text-xs">#12{i}</div>
                            <div>
                              <p className="font-bold text-sm">Customer Name</p>
                              <p className="text-[10px] text-gray-400">2 items • ₹1,499</p>
                            </div>
                          </div>
                          <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Paid</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                    <h3 className="font-serif text-xl font-bold mb-6">Low Stock Alert</h3>
                    <div className="space-y-4">
                      {products.slice(0, 5).map(p => (
                        <div key={p.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center space-x-4">
                            <img src={p.images[0]} className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <p className="font-bold text-sm line-clamp-1">{p.name}</p>
                              <p className="text-[10px] text-gray-400">{p.category}</p>
                            </div>
                          </div>
                          <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase">5 Left</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'products' && (
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                  <h3 className="font-serif text-2xl font-bold">Product Inventory</h3>
                  <div className="flex items-center space-x-4 w-full md:w-auto">
                    <button 
                      onClick={() => {
                        resetProductForm();
                        setEditingProduct(null);
                        setIsProductModalOpen(true);
                      }}
                      className="bg-brand-black text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center space-x-2 hover:bg-brand-gold transition-colors"
                    >
                      <Plus size={18} />
                      <span>ADD PRODUCT</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-gray-100">
                        <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Product</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Category</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Price</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Status</th>
                        <th className="pb-4 font-bold text-xs uppercase tracking-widest text-gray-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {products.map(p => (
                        <tr key={p.id} className="group hover:bg-gray-50 transition-colors">
                          <td className="py-4">
                            <div className="flex items-center space-x-4">
                              <img src={p.images[0]} className="w-12 h-12 rounded-xl object-cover" />
                              <span className="font-bold text-sm line-clamp-1">{p.name}</span>
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="text-xs text-gray-500 uppercase font-bold">{p.category}</span>
                          </td>
                          <td className="py-4 font-bold text-sm">₹{p.price}</td>
                          <td className="py-4">
                            <span className={cn(
                              "text-[10px] font-bold px-2 py-1 rounded-full uppercase",
                              p.isBestSeller ? "bg-brand-gold/10 text-brand-gold" : "bg-green-100 text-green-600"
                            )}>
                              {p.isBestSeller ? 'Best Seller' : 'Active'}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => openEditProduct(p)}
                                className="p-2 text-gray-400 hover:text-brand-gold transition-colors"
                              >
                                <Edit size={16} />
                              </button>
                              <button 
                                onClick={() => deleteProduct(p.id)}
                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'categories' && (
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                  <h3 className="font-serif text-2xl font-bold">Categories</h3>
                  <button 
                    onClick={() => {
                      setCategoryForm({ name: '', image: 'https://picsum.photos/seed/cat/800/800' });
                      setEditingCategory(null);
                      setIsCategoryModalOpen(true);
                    }}
                    className="bg-brand-black text-white px-6 py-2 rounded-xl font-bold text-sm flex items-center space-x-2 hover:bg-brand-gold transition-colors"
                  >
                    <Plus size={18} />
                    <span>ADD CATEGORY</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map(cat => (
                    <div key={cat.id} className="group relative aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                      <img src={cat.image} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h4 className="font-bold mb-4">{cat.name}</h4>
                        <div className="flex space-x-2">
                          <button onClick={() => openEditCategory(cat)} className="p-2 bg-white text-brand-black rounded-lg hover:bg-brand-gold hover:text-white transition-colors">
                            <Edit size={16} />
                          </button>
                          <button onClick={() => deleteCategory(cat.id)} className="p-2 bg-white text-brand-black rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent group-hover:hidden">
                        <span className="text-white font-bold">{cat.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab !== 'dashboard' && activeTab !== 'products' && activeTab !== 'categories' && (
              <div className="bg-white p-20 rounded-[2rem] shadow-sm border border-gray-100 text-center space-y-4">
                <LayoutDashboard size={48} className="mx-auto text-gray-200" />
                <h3 className="text-xl font-serif font-bold">Section Under Development</h3>
                <p className="text-gray-400">This part of the admin panel is coming soon.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {isProductModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsProductModalOpen(false)} className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white z-[101] rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                <h3 className="text-xl font-serif font-bold">{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>
                <button onClick={() => setIsProductModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X size={24} /></button>
              </div>
              <form onSubmit={handleProductSubmit} className="p-8 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Product Name</label>
                    <input type="text" required value={productForm.name} onChange={e => setProductForm({...productForm, name: e.target.value})} className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-gold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Category</label>
                    <select value={productForm.category} onChange={e => setProductForm({...productForm, category: e.target.value})} className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-gold outline-none">
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Price (₹)</label>
                    <input type="number" required value={productForm.price} onChange={e => setProductForm({...productForm, price: Number(e.target.value)})} className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-gold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">MRP (₹)</label>
                    <input type="number" required value={productForm.mrp} onChange={e => setProductForm({...productForm, mrp: Number(e.target.value)})} className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-gold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Description</label>
                  <textarea rows={3} value={productForm.description} onChange={e => setProductForm({...productForm, description: e.target.value})} className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-gold"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Image URL</label>
                  <input type="text" required value={productForm.images[0]} onChange={e => setProductForm({...productForm, images: [e.target.value]})} className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-gold" />
                </div>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={productForm.isBestSeller} onChange={e => setProductForm({...productForm, isBestSeller: e.target.checked})} className="w-5 h-5 rounded border-gray-300 text-brand-gold focus:ring-brand-gold" />
                    <span className="text-sm font-bold">Best Seller</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={productForm.isNew} onChange={e => setProductForm({...productForm, isNew: e.target.checked})} className="w-5 h-5 rounded border-gray-300 text-brand-gold focus:ring-brand-gold" />
                    <span className="text-sm font-bold">New Arrival</span>
                  </label>
                </div>
                <div className="pt-6 border-t flex space-x-4">
                  <button type="button" onClick={() => setIsProductModalOpen(false)} className="flex-1 bg-gray-100 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">CANCEL</button>
                  <button type="submit" className="flex-1 bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-gold transition-colors">
                    <Save size={18} />
                    <span>{editingProduct ? 'UPDATE PRODUCT' : 'SAVE PRODUCT'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Category Modal */}
      <AnimatePresence>
        {isCategoryModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCategoryModalOpen(false)} className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white z-[101] rounded-[2rem] shadow-2xl overflow-hidden">
              <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                <h3 className="text-xl font-serif font-bold">{editingCategory ? 'Edit Category' : 'Add Category'}</h3>
                <button onClick={() => setIsCategoryModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X size={24} /></button>
              </div>
              <form onSubmit={handleCategorySubmit} className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Category Name</label>
                  <input type="text" required value={categoryForm.name} onChange={e => setCategoryForm({...categoryForm, name: e.target.value})} className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-gold" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Banner Image URL</label>
                  <input type="text" required value={categoryForm.image} onChange={e => setCategoryForm({...categoryForm, image: e.target.value})} className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-brand-gold" />
                </div>
                <div className="pt-6 border-t flex space-x-4">
                  <button type="button" onClick={() => setIsCategoryModalOpen(false)} className="flex-1 bg-gray-100 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors">CANCEL</button>
                  <button type="submit" className="flex-1 bg-brand-black text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-gold transition-colors">
                    <Save size={18} />
                    <span>{editingCategory ? 'UPDATE' : 'SAVE'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;
