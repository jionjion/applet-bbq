/* 使用 Promise 语法封装 */

// 基础URL
let baseURL = "https://api.github.com"

export const $http = function(url, method = "GET", data = {}) {
	// 封装
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			method: method,
			header: {
				'Content-Type': 'application/json'
			},
			data: data,
			success: (response) => {
				resolve(response.data)
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}

export const $get = function(url, data = {}) {
	// 封装
	return $http(url, 'GET', data)
}

export const $post = function(url, data = {}) {
	// 封装
	return $http(url, 'POST', data)
}