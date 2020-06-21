/**
 * 서버와 소통하는 일은 이 곳에서 모두 해결
 * GET
 * POST
 * PUT
 * DELETE
 */

const BASE_URL = 'http://localhost:8000/todo'

/**
 * GET
 * Todo 목록을 가져온다. promise, then 연구하기, http, 동기 비동기, useEffect(Life-cycle), router
 */

export async function fetchTodos() {
  const response = await fetch(BASE_URL) // fetch가 끝난 이후 아래 작업 시작
  if (!response.ok) {
    return []
  }

  //   const data = await response.json()
  //   return data

  return response.json() // 위 코드와 동일
}

/**
 * POST
 * 새로운 Todo 추가
 */

export async function postTodo(todo) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })

  return response.ok
}

/**
 * PUT
 * 상태 update
 */

export async function updateTodo(todo) {
  const response = await fetch(`${BASE_URL}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })

  return response.ok
}

/**
 * DELETE
 * 삭제
 */

export async function deleteTodo(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.ok
}
