"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import type { Product } from "@/types/products"

interface CartItem extends Product {
  quantity: number
  selectedSize: string
  selectedColor: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  const updateQuantity = (index: number, type: "increase" | "decrease") => {
    const newCartItems = [...cartItems]
    if (type === "increase") {
      newCartItems[index].quantity += 1
    } else if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1
    }
    setCartItems(newCartItems)
    localStorage.setItem("cart", JSON.stringify(newCartItems))
  }

  const removeItem = (index: number) => {
    const newCartItems = cartItems.filter((_, i) => i !== index)
    setCartItems(newCartItems)
    localStorage.setItem("cart", JSON.stringify(newCartItems))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 15
  const total = subtotal - discount + deliveryFee

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "discount20") {
      setDiscount(subtotal * 0.2)
    } else {
      setDiscount(0)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Button onClick={() => router.push("/")}>Continue Shopping</Button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">YOUR CART</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex gap-4 p-4 border rounded-lg">
              <div className="w-24 h-24 relative">
                <Image
                  src={item.image ? urlFor(item.image).url() : "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Size: {item.selectedSize}
                      <span className="mx-2">|</span>
                      Color: {item.selectedColor}
                    </p>
                  </div>
                  <button onClick={() => removeItem(index)} className="text-gray-400 hover:text-gray-600">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => updateQuantity(index, "decrease")}
                      className="px-3 py-1 hover:bg-gray-100"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 min-w-[3rem] text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, "increase")} className="px-3 py-1 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <p className="font-semibold">${item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="border rounded-lg p-6 sticky top-8">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (-20%)</span>
                  <span>-${discount}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee}</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <Button onClick={applyPromoCode} variant="outline" className="w-full">
                  Apply
                </Button>
              </div>

              <Button onClick={() => router.push("/checkout")} className="w-full">
                Go to Checkout →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

