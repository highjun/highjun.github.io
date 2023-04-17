---
title: 'Linear Programming - (1) Definitions and Convexity'
date: '2022-06-05'
keywords: ['next-js', 'tailwind', 'guide']
isDraft: true
image: "sample_20230220.webp"
summary: "Sample Blog Post입니다.\n 확인용으로 써주세요!"
length: "10 Min Read"
---

Linear Programming을 배울 때 빼놓을 수 없는 성질 중 하나가 바로 Duality이다. 다른 많은 문제에서 나타나는 Duality와 같은 의미로 쓰이는데,
우리는 주어진 LP, Primal LP에서 Dual LP를 유도해낼 수 있고, 이 둘은 밀접한 연관성을 지니게 된다.

## Dual LP

Canonical Form의 Dual Linear Programming을 유도해보자. 각각의 부등식에 $y_j$라는 값을 곱해서 더한다고 하면

$$
\begin{align*}
\mathbf{y^Tb} &\geq \mathbf{y^TAx} \\
&= (\mathbf{A^Ty})^T \mathbf{x} \\
&\geq \mathbf{c^Tx}
\end{align*}
$$

으로 $\mathbf{A^Ty} \geq \mathbf{c}$의 조건 하에 $\mathbf{b^T y}$를 Minimize하는 문제로 바꿀 수 있게 된다. 마찬가지로 General Form에서의
어떤 Linear Constraint도 다음과 같은 방식으로 변환된다.

|                                     Primal                                      |                                       Dual                                        |
| :-----------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| $\max{\mathbf{c^T x}}; \mathbf{Ax} \leq \mathbf{b}, \mathbf{x} \geq \mathbf{0}$ | $\min{\mathbf{b^T y}}; \mathbf{A^Ty} \geq \mathbf{c}, \mathbf{y} \geq \mathbf{0}$ |
| $\min{\mathbf{c^T x}}; \mathbf{Ax} \geq \mathbf{b}, \mathbf{x} \geq \mathbf{0}$ | $\max{\mathbf{b^T y}}; \mathbf{A^Ty} \leq \mathbf{c}, \mathbf{y} \geq \mathbf{0}$ |
|  $\max{\mathbf{c^T x}}; \mathbf{Ax} = \mathbf{b}, \mathbf{x} \geq \mathbf{0}$   |               $\min{\mathbf{b^T y}}; \mathbf{A^Ty} \geq \mathbf{c}$               |

## Weak Duality Inequality

Primal LP와 Dual LP의 Objective 사이에는 앞서 유도했듯이 부등식이 성립하는데 이를 Weak Duality라고 부른다.

$$\mathbf{b^Ty} \geq \mathbf{c^Tx}$$

이로 인해서 Dual LP의 feasible solution은 항상 Primal LP의 feasible solution 이상의 값을 갖게 된다.

## Strong Duality Theorem

Weak version에서 더 나아가 Optimal이 같아지는 것 역시 증명할 수 있다.

- Primal(Dual)의 Optimal Solution이 존재할 경우, Dual(Primal) 역시 Optimal solution이 존재하고 그 값은 같다.

Primal의 Optimal Solution이 존재한다면, Primal에 대한 Simplex Method를 적용하면서, 각 Row를 얼마나 더했는지에 대한 Record Matrix를 만들 수 있어 다음과 같은 식이 만들어진다.

$$
\begin{pmatrix}
    R & 0 \\
    y^T & 1\\
\end{pmatrix}
\begin{pmatrix}
    A & I & b \\
    -c^T & 0 & 0\\
\end{pmatrix}
=
\begin{pmatrix}
    RA & R  & Rb\\
    -c^T+y^TA & y^T & y^Tb\\
\end{pmatrix}
$$

로, $b^Ty = c^Tx, y^T = 0, -c^T + y^TA \geq 0$로 Dual Problem의 Solution 역시 같이 구해진다.

## Complementary Slackness Condition

또한, 위의 Simplex Method에서 Simplex Tableau의 값이 $0$인 경우에만 Basic Feasible Set이 될 수 있다는 점을 고려하면, 다음의 두
가지 조건을 만족하게 된다는 것을 알 수 있다.

$$
\sum_i A_{ij}y_i = c_j \text{ or } x_j = 0\\
\sum_j A_{ij}x_j = b_i \text{ or } y_i = 0\\
$$

이를 Complementary Slackness Condition이라고 부른다.